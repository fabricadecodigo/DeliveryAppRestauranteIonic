import { FileService } from './../../core/services/file.service';
import { Platform, ActionSheetController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../categories/shared/category.service';
import { ToastService } from './../../core/services/toast.service';
import { CardapioService } from './../shared/cardapio.service';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
const { Camera } = Plugins;

@Component({
  selector: 'app-cardapio-edit',
  templateUrl: './cardapio-edit.page.html',
  styleUrls: ['./cardapio-edit.page.scss'],
})
export class CardapioEditPage implements OnInit {
  title = 'Novo produto';

  cardapioModel: ICardapioModel = {
    category: '',
    name: '',
    price: null,
    description: ''
  };

  id: string;

  cartegories: ICategoryResponse[] = [];

  image: Blob;
  photoUrl: SafeUrl;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  constructor(
    private location: Location,
    private activedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private toast: ToastService,
    private fileService: FileService,
    private cardapioService: CardapioService,
    private categoryService: CategoryService
  ) { }

  async ngOnInit() {
    await this.loadCategories();
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadCardapio(this.id);
    }
  }

  async loadCategories() {
    this.cartegories = await this.categoryService.getAll();
  }

  async loadCardapio(id: string) {
    try {
      const cardapio = await this.cardapioService.getById(id);
      this.cardapioModel = {
        category: cardapio.category,
        name: cardapio.name,
        price: cardapio.price,
        description: cardapio.description
      };
    } catch (error) {
      console.error(error);
      this.toast.showError('Ocorreu algum erro ao tentar recuperar o produdo.');
    }
  }

  async onBtnAddImageClick() {
    const buttons = [
      {
        text: 'Tirar uma foto',
        icon: 'camera',
        handler: () => {
          this.addImageFromCamera(CameraSource.Camera);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];

    const isHybrid = this.platform.is('hybrid');

    if (isHybrid) {
      buttons.push({
        text: 'Escolher da galeria',
        icon: 'image',
        handler: () => {
          this.addImageFromCamera(CameraSource.Photos);
        }
      });
    } else {
      buttons.push({
        text: 'Escolher um arquivo',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Escolha uma das opções abaixo',
      buttons
    });
    await actionSheet.present();
  }

  onBtnRemoveImageClick() {
    this.image = null;
    this.photoUrl = null;
    // chamar algum endpoint para deletar a foto da api
  }

  async addImageFromCamera(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 60,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source
      });

      this.image = this.fileService.base64toBlob(image.base64String, `image/${image.format}`);
      this.photoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image.base64String}`);
    } catch (error) { }
  }

  async addImageFromDesktop(event: MSInputMethodContext) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.files.length > 0) {
      const file: File = target.files[0];

      this.image = file;
      const fileUrl = await this.fileService.fileToBase64(file);
      this.photoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    } else {
      this.image = null;
      this.photoUrl = null;
    }
  }

  async onSubmit() {
    try {
      // chamar a api
      let result: ICardapioResponse;
      if (this.id) {
        result = await this.cardapioService.update(this.id, this.cardapioModel, this.image);
      } else {
        result = await this.cardapioService.insert(this.cardapioModel, this.image);
      }

      if (result) {
        console.log(result);
        this.toast.showSuccess('Produto cadastrado com sucesso');
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o produto');
    }
  }
}

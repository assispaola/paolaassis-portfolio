// src/app/app.config.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  // Configurações globais da aplicação
  public apiUrl: string = 'https://api.placeholder.com';
  public appTitle: string = 'Paola Assis Portfolio';
  
  constructor() {
    this.initialize();
  }

  private initialize() {
    // Inicialização de serviços ou configurações adicionais
    console.log('AppConfig initialized with title:', this.appTitle);
  }
}
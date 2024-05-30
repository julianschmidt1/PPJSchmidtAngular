import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({ "projectId": "parcialjs", "appId": "1:15189415614:web:1331423ebfb0722777b0ef", "storageBucket": "parcialjs.appspot.com", "apiKey": "AIzaSyCVB_2gFQIG6UGoZL5OLTBvlU_sJ-hhMfk", "authDomain": "parcialjs.firebaseapp.com", "messagingSenderId": "15189415614" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideHttpClient(),
  ]
};

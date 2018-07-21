// Import global stylesheet
import './styles/main.css';
import { platformBrowserDynamic } from '../node_modules/@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule); 

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IconButtonModule } from './app/icon-button/icon-button.module';

platformBrowserDynamic().bootstrapModule(IconButtonModule)
                        .catch(err => console.error(err));

 
import ReactDOM from 'react-dom/client';
import App from './App';
import "./firebase/app"
import { store } from './redux/store/store';
import {Provider} from "react-redux"
import {I18nextProvider} from "react-i18next"
import i18next from "i18next"
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import "./test"

i18next.init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </Provider>
   
);

 
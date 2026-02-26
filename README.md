# Использовал LLM (ChatGPT) при выполнении тестового задания. Angular для меня новый фреймворк — раньше я в основном работал с React/Vue, а с TypeScript был знаком поверхностно. LLM использовал как справочник по Angular и TypeScript, при этом основную логику приложения (структуру меню, выбор пунктов, подсчёт количества и суммы для выбранного меню) писал и отлаживал самостоятельно.

# Конкретно ИИ помог разобраться с особенностями Angular standalone-подхода: что в компонентах нужно явно подключать используемые директивы и пайпы через imports (например, NgIf, NgFor, CurrencyPipe) и почему без этого появляются ошибки компилятора. Также помог понять и применить Signals (signal, computed) для хранения состояния и вычисляемых значений (активное меню, количество выбранных пунктов и сумма по текущему меню), а ещё — с типизацией данных из JSON (описание интерфейсов/типов, чтобы избежать ошибок при работе со структурой меню).

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Building

To build the project run:

```bash
ng build
```



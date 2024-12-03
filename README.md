# Личный кабинет сотрудника компании

### Описание проекта
Это веб-приложение для внутреннего портала компании "TechCorp", предназначенное для автоматизации процессов общения сотрудников с HR-отделом, технической поддержкой и другими подразделениями компании. В нем реализована возможность для сотрудников выбирать или запрашивать различные услуги, такие как смена должности, запросы на обучение, проблемы с оборудованием и другие задачи. Приложение также отображает актуальные новости и события компании, позволяет отслеживать важные уведомления и взаимодействовать с авторизованным профилем пользователя.


### Структура проекта
```
lk.sirius.react.project/
├── public/                 # Публичные файлы приложения
└── src/                    # Исходный код приложения
    ├── components/         # Компоненты React
    ├── layouts/            # Компоненты шаблонов
    ├── pages/              # Компоненты страниц проекта
    ├── store/              # Модули для работы с состоянием
    ├── types/              # Отображение данных с API
package.json                # Зависимости и скрипты проекта
README.md                   # Документация проекта
```

### Конвенция разработки
- Все компоненты называются **с большой буквы**;
- Лежат в **одноименной директории**;
- Именование папок компонентов в формате **main-page**;

### Наименование веток
- `feature/...`: для новых функций 
- `update/...`: для обновлений

### Наименование коммитов
- `feat`: Добавляет новую функцию
- `fix`: Исправляет ошибку
- `doc`: Добавляет документацию по проекту
- `delete`: Удаляет файлы 

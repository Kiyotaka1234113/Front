# Lab 4 — Event Handling & Reusable Components

## Student: [Твоё имя]  
## Date: 2026-02-07

---

## 1. Lab 4.1 — RegistrationForm

**Цель:**  
Создать форму регистрации с валидацией, обработкой событий и предотвращением отправки по умолчанию.

**Описание решения:**

- Использованы **контролируемые компоненты** (value + onChange).  
- Для каждого поля есть отдельная **функция валидации**:  
  - `validateName(name)`  
  - `validateEmail(email)`  
  - `validateAge(age)`  
- Ошибки отображаются под полями при вводе.  
- При submit вызывается `handleSubmit(e)`, который:
  - `e.preventDefault()` предотвращает перезагрузку
  - Проверяет все поля
  - Если ошибки есть → выводятся
  - Если всё валидно → показывается сообщение "Registration successful!" и поля очищаются.

**Используемые технологии:**  
React, useState, JSX, inline event handlers

---

## 2. Lab 4.2 — ArticleManager

**Цель:**  
Рефакторинг монолитного компонента на три переиспользуемых: AddArticle, ArticleList, ArticleItem.

**Описание решения:**

- **ArticleManager** хранит состояние `articles`, `title`, `summary`.
- **AddArticle** — форма для добавления статьи (через props передаются данные и обработчики).
- **ArticleList** — выводит список статей, передавая каждую в ArticleItem.
- **ArticleItem** — управляет своим локальным состоянием `isOpened` (показ/скрытие summary).
- При удалении статьи вызывается `onClickRemove(id)` из родителя.
- Использован **pattern controlled component** + **useState** для локального состояния.

**Используемые технологии:**  
React, useState, props, компонентная архитектура, map для списков.

---

## 3. Запуск проекта

Каждая задача — отдельный Vite-проект:

**Task 1 (Registration Form):**
```bash
cd lab_4/task_1
npm install
npm run dev
```

**Task 2 (Article Manager):**
```bash
cd lab_4/task_2/task2
npm install
npm run dev
```

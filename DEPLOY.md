# Публикация в GitHub

Репозиторий: https://github.com/Kiyotaka1234113/Front

Выполни в корне проекта (`Front`) в терминале:

```bash
# 1. Инициализация (если ещё не делал)
git init

# 2. Добавить удалённый репозиторий (если ещё не добавлен)
git remote add origin https://github.com/Kiyotaka1234113/Front.git

# 3. Добавить все файлы (node_modules игнорируются через .gitignore)
git add .

# 4. Первый коммит
git commit -m "Lab 4: Registration Form & Article Manager — обновлённый UI"

# 5. Ветка main и пуш (репозиторий пустой)
git branch -M main
git push -u origin main
```

Если `origin` уже есть и указывает на другой URL:

```bash
git remote set-url origin https://github.com/Kiyotaka1234113/Front.git
git push -u origin main
```

При запросе авторизации используй логин/пароль GitHub или Personal Access Token.

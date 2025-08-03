# React + Vite

## BLOG project

Области хранения данных:
- база данных
- BFF (backend for frontend)
- redux store

Сущности приложения:
- пользователи: БД (список пользователей), BFF (сессия текущего пользователя), Store (для отображения в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), Store (использование на клиенте)
- статья: БД (список статей), Store (отображение в браузере)
- комментарии: БД (список комментариев), Store (отображение в браузере)

Таблицы БД:
- пользователи - users: id / login / password / registed_at / role_id
- роли - roles: id / name
- статьи - posts: / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:
- сессия текущего пользователя: login / password / role

Схема для Redux Store (на клиенте):
- user: id / login / roleId / session
- posts: array posts: id / imageUrl / publishedAt / commentsCount
- post:  id / imageUrl / content / publishedAt / comments: array comment: id / author / content / publishedAt
- users: array user: id / login / publishedAt / role

Важно продумать шаги заранее чтобы во время разработки не было несогласованностей!!!

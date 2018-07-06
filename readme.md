Сделайте список из карточек со всеми полями, приходящими с сервера. Данные для карточек берутся по адресу https://jsonplaceholder.typicode.com/comments  По нажатию на каждую карточку вызывается модальное окно редактирования комментария(поле body из карточки). В модальном окне есть textarea с комментарием из карточки, а также две кнопки – закрыть (просто закрывает окно редактирования, ничего не сохраняя) и применить (изменяет текст в карточке и закрывает окно редактирования).  Над списком карточек есть кнопка “отправить”, которая собирает все данные из карточек в массив и логирует в консоль (чтобы в дальнейшем эти данные можно было отправлять на сервер).  В первую очередь стоит обратить внимание на архитектуру компонентов и удобство их дальнейшего использования. Из-за размера списка важно также учесть потенциальные проблемы производительности. Важна именно реализация клиентской логики с использованием react – сборщики, препроцессоры остаются на ваше усмотрение.  Страница должна открываться на десктоп браузере chrome последних версий. Стили и дизайн не критичен.
let defaultMessages = {
  date: 'Дата',
  time: 'Время',
  event: 'Событие',
  allDay: 'Весь день',
  week: 'Неделя',
  work_week: 'Рабочая неделя',
  day: 'День',
  month: 'Месяц',
  previous: 'Пред.',
  next: 'След.',
  yesterday: 'Вчера',
  tomorrow: 'Завтра',
  today: 'Сегодня',
  agenda: 'События',

  noEventsInRange: 'Нет событий!',

  showMore: total => `+${total} еще`,
}

export default function messages(msgs) {
  return {
    ...defaultMessages,
    ...msgs,
  }
}

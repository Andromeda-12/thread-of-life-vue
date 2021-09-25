const MIN_PASSWORD_LENGTH = 6

export const emptyFieldRule = [(v) => !!v || 'Это поле обязательное']

export const emailRules = [
  (v) => !!v || 'E-mail обязательный',
  (v) => /.+@.+\..+/.test(v) || 'Некорректная почта',
]

export const passwordRules = [
  (v) => !!v || 'Пароль обязательный',
  (v) =>
    (v && v.length >= MIN_PASSWORD_LENGTH) ||
    `Пароль должен содержать ${MIN_PASSWORD_LENGTH} символов или больше`,
]

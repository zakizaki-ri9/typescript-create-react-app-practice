

export default {
  INCREMENT: 'LONG_PREFIX_INCREMENT',
  DECREMENT: 'LONG_PREFIX_DECREMENT',
  SET_COUNT: "LONG_PREFIX_SET_COUNT"
} as const

// 以下でもOK
// export const INCREMENT = "LONG_PREFIX_INCREMENT" as const
// export const DECREMENT = "LONG_PREFIX_DECREMENT" as const
// export const SET_COUNT = "LONG_PREFIX_SET_COUNT" as const

const colors = {
  magenta: '#FD2B7D'
}

export default {
  primary: colors.magenta,
  ...colors // This syntax will break Sapper
};
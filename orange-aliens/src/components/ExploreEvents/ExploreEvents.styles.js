export const styles = theme => ({
    main_grid: {
      'margin-top': 20,
    },
    item_grid: {
      'margin-top': 5,
    },
    date_group: {
      'top-padding': 30,
    },
    typo_margin: {},
    media: {
      height: 90,
    },
    column: {
      flexBasis: '33.33%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing.unit,
    },
  })
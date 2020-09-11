export const currencyFormatter = value =>
    new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL',
    }).format(value);

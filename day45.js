// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);

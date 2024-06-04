export function formatDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedDate = formatter.format(date);

    return `Créée le ${formattedDate}`;
}
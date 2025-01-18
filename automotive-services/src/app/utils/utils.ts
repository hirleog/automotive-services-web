export function formatarValorEmReal(valor: number): string {
    // Usando a API Intl.NumberFormat para formatar como moeda brasileira (R$)
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);
}

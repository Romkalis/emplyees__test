export function getProfession ( prof ) {
    switch (prof) {
      case 'driver': return 'Водитель'
      case 'waiter': return 'Официант'
      case 'cook': return 'Повар'
      default: '';
    }
}

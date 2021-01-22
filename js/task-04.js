const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
  	if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName)
    } else {
      return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
    }
  },
};

function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

function onOrderError(error) {
  return `Ошибка! ${error}`;
}

pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);

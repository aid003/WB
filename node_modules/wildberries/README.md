# Wildberries SDK JavaScript

Библиотека для работы с Wildberries API, написанная на TypeScript.

[![npm version](https://img.shields.io/npm/v/@sentry/core.svg)](https://www.npmjs.com/package/@sentry/core)

## Links

[Документация сервера API](https://suppliers-api.wildberries.ru/swagger/index.html#/)
[Документация сервера Статистики](https://images.wbstatic.net/portal/education/Kak_rabotat'_s_servisom_statistiki.pdf)

[![Package](https://img.shields.io/badge/package-wildberries-orange)](https://www.npmjs.com/package/wildberries)

## Установка

Для установки Wildberries-SDK используйте менеджер пакетов [npm](https://www.npmjs.com/).

```bash
npm install wildberries
```

## Подключение

```js
import Wildberries from 'wildberries';

// Необходимо передать TOKEN
const WB = new Wildberries(process.env.TOKEN);

// Настройки опциональные
const WB = new Wildberries(process.env.TOKEN, {
    baseURL: '/wildberries-proxy',
});
```

```js
// Работа со списком заказов
const orders = await WB.getOrdersAll({
    date_start: '2021-05-24T00:00:00.000Z';
});

console.log(orders.map(x => x.orderId));
```

## Использование

URI для Endpoints *https://suppliers-api.wildberries.ru*

### Цены

#### postPrices

```js
POST ​/public​/api​/v1​/prices
```

Загрузка цен. За раз можно загрузить не более 1000 номенклатур.

#### getInfo

```js
GET ​/public​/api​/v1​/info/{quantity}
```

Получение информации по номенклатурам, их ценам, скидкам и промокодам. Если не указывать фильтры, вернётся весь товар.

quantity  
2 - товар с нулевым остатком, 1 - товар с ненулевым остатком, 0 - товар с любым остатком  
Доступные значения: 0, 1, 2

### Промокоды и скидки

#### updateDiscounts

```js
POST ​/public​/api​/v1​/updateDiscounts/{activateFrom}
```

Установка скидок для номенклатур. Максимальное количество номенклатур на запрос - 1000.

activateFrom  
Дата активации скидки в формате YYYY-MM-DD или YYYY-MM-DD HH:MM:SS. Если не указывать, скидка начнет действовать сразу.

#### revokeDiscounts

```js
POST ​/public​/api​/v1​/revokeDiscounts
```

Сброс скидок для номенклатур.

#### updatePromocodes

```js
POST ​​/public​/api​/v1​/updatePromocodes/{activateFrom}
```

Установка промокодов для номенклатур. Максимальное количество номенклатур на запрос - 1000.

activateFrom  
Дата активации промокода в формате YYYY-MM-DD или YYYY-MM-DD HH:MM:SS. Если не указывать, промокод начнет действовать сразу.

#### revokePromocodes

```js
POST ​/public​/api​/v1​/revokePromocodes
```

Сброс промокодов для номенклатур.

### Marketplace

#### getStocks

```js
GET ​​/api​/v2​/stocks/{search}&{skip}&{take}&{sort}&{order}
```

Возвращает список товаров поставщика с их остатками.

search  
Выполняет поиск по всем полям таблицы.

skip  
Обязательный параметр  
Задает сколько записей пропустить (для пагинации).

take  
Обязательный параметр  
Задает сколько записей выдать (для пагинации).

sort  
Сортирует ответ по полю. По умолчанию или для неизвестного столбца сортирует по имени.  
Доступные значения: 'subject', 'brand', 'name', 'size', 'barcode', 'article'

order  
Задает порядок сортировки.  
Доступные значения: 'asc', 'desc'

#### getStocksAll

```js
GET ​​/api​/v2​/stocks/{search}&{skip}&{take}&{sort}&{order}
```

Возвращает список товаров поставщика с их остатками без пагинации.

#### postStocks

```js
POST ​​/api​/v2​/stocks
```

Обновляет остатки товаров.

#### getWarehouses

```js
GET /api​/v2​/warehouses
```

Возвращает список складов поставщика.

#### getOrders

```js
GET /api​/v2​/orders
```

Возвращает список сборочных заданий поставщика. При выборе промежутка времени заказы следует забирать с помощью параметров skip и take, не более чем 1000 за один запрос. Параметр total подсказывает, сколько всего заказов было сделано за текущий промежуток времени.

#### getOrdersAll

```js
GET /api​/v2​/orders
```

Возвращает список сборочных заданий поставщика без пагинации.

#### putOrders

```js
PUT ​​/api​/v2​/orders
```

Обновляет статус переданных сборочных заданий.

### Card

#### batchCreate

```js
POST ​​​/card​/batchCreate
```

Создаёт группу новых карточек.

```js
POST /card​/cardByImtID
```

Получение карточки поставщика по imt id.

#### cardCreate

```js
POST ​​/card​/create
```

Создаёт одну новую карточку.

#### deleteNomenclature

```js
POST /card​/deleteNomenclature
```

Удаляет одну номенклатуру из карточки товара.

#### getCardFile

```js
GET ​/card​/file​/{supplierID}​/{fileID}
```

Позволяет выгружать файлы из хранилища. data содержит массив байт, который является файлом.

supplierID  
Обязательный параметр  
Идентификатор поставщика.

fileID  
Обязательный параметр  
Идентификатор файла.

#### getBarcodes

```js
POST ​/card​/getBarcodes
```

Позволяет сгенерировать шк для размера.

#### cardList

```js
POST /card​/list
```

Позволяет получить массив карточек товаров, удовлетворяющих фильтру и с указанной сортировкой. order - порядок отображения карточек.Может принимать значения asc или desc.sort - какие columns и с какими excludedValues исключить.find - поиск карточке с определённым search(значением) в определённом columns.query позволяет получать не все карточки сразу: limit - сколько карточек максимум вывести, offset - сколько карточек от самой первой пропустить.

#### cardUpdate

```js
POST ​/card​/update
```

Позволяет обновлять карточку товара.Карточка с определённым ID изменяется на ту, которую прислали.

#### cardUploadFileMultipart

```js
POST ​/card​/upload​/file​/multipart
```

Позволяет обновлять карточку товара.Карточка с определённым ID изменяется на ту, которую прислали.

X-File-Id  
Обязательный параметр
Название файла.

## Лицензия

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)

declare namespace Wildberries {
    namespace RequestBodies {
        export type ModelsNomenclatureArray = Schemas.ModelsNomenclature[];
    }
    namespace Schemas {
        export interface Addin {
            params?: Parameter[] | null;
            type?: string;
        }
        export interface Card {
            /**
             * Общие характеристики товара
             */
            addin?: Addin[] | null;
            /**
             * Страна-изготовитель товара
             */
            countryProduction?: string;
            /**
             * Дата создания карточки. Заполняется автоматически
             */
            createdAt?: string; // date-time
            /**
             * Идентификатор карточки. Генерируется при создании карточки
             */
            id?: string; // uuid
            /**
             * Не используется поставщиком
             */
            imtId?: number; // uint64
            /**
             * Не используется поставщиком
             */
            imtSupplierId?: number; // uint64
            /**
             * Структура с характеристиками номенклатур товара
             */
            nomenclatures?: Nomenclature[] | null;
            /**
             * Продукт. К какой категории принадлежит товар (джинсы, книги и прочее)
             */
            object?: string;
            /**
             * Родительская категория
             */
            parent?: string;
            /**
             * Идентификатор поставщика. Подставляется автоматически
             */
            supplierId?: string; // uuid
            supplierVendorCode?: string;
            /**
             * Дата последнего обновления карточки. Заполняется автоматически
             */
            updatedAt?: string; // date-time
            /**
             * Айди массовой загрузки, в процессе которой была создана карточка. Если айди пуст, то карточка была создана другим способом
             */
            uploadID?: string; // uuid
            /**
             * Идентификатор пользователя, создавшего карточку. Подставляется автоматически
             */
            userId?: number; // uint64
        }
        export interface Cursor {
            limit?: number; // int
            offset?: number; // int
            total?: number; // int
        }
        export interface ErrorResponse {
            /**
             * Перечень ошибок, случившихся при валидации загружаемых цен.
             */
            errors?: string[];
        }
        export interface Filter {
            column?: string;
            excludedValues?: {
                [key: string]: any;
            } | null;
        }
        export interface Find {
            column?: string;
            search?: {
                [key: string]: any;
            } | null;
        }
        export type Info = {
            /**
             * номенклатура
             * example:
             * 1234567
             */
            nmId?: number;
            /**
             * цена
             * example:
             * 1000
             */
            price?: number; // float
            /**
             * скидка
             * example:
             * 10
             */
            discount?: number;
            /**
             * промокод
             * example:
             * 5
             */
            promoCode?: number; // float
        }[];
        export interface ModelsNomenclature {
            /**
             * example:
             * 15
             */
            discount?: number;
            /**
             * example:
             * 12345678
             */
            nm?: number;
        }
        export interface Nomenclature {
            /**
             * Характеристики конкретной номенклатуры товара
             */
            addin?: Addin[] | null;
            concatVendorCode?: string;
            /**
             * Идентификатор цвета товара. Генерируется при создании карточки
             */
            id?: string; // uuid
            isArchive?: boolean;
            /**
             * Не используется поставщиком
             */
            nmId?: number; // uint64
            /**
             * Структура с характеристиками различных размеров номенклатуры
             */
            variations?: Variation[] | null;
            /**
             * Артикул товара
             */
            vendorCode?: string;
        }
        export interface Order {
            /**
             * Идентификатор заказа
             * example:
             * 13833711
             */
            orderId?: string;
            /**
             * Дата создания заказа (RFC3339)
             * example:
             * 2021-02-20T16:50:33.365+03:00
             */
            dateCreated?: string; // date
            /**
             * Идентификатор склада WB, на которой заказ должен быть доставлен
             * example:
             * 119408
             */
            wbWhId?: number;
            /**
             * Идентификатор ПВЗ/магазина, куда необходимо доставить заказ (если применимо)
             */
            pid?: number;
            /**
             * Адрес ПВЗ/магазина, куда необходимо доставить заказ (если применимо)
             * example:
             * г Ставрополь (Ставропольский край), Ленина 482/1
             */
            officeAddress?: string;
            /**
             * Адрес клиента для доставки
             * example:
             * улица, дом, квартира
             */
            deliveryAddress?: string;
            /**
             * Информация о клиенте
             */
            userInfo?: {
                /**
                 * ИД пользователя
                 * example:
                 * 123
                 */
                userId?: number;
                /**
                 * ФИО
                 * example:
                 * Иванов Иван Иванович
                 */
                fio?: string;
                /**
                 * Номер телефона
                 * example:
                 * 79991112233
                 */
                phone?: string;
            };
            /**
             * Идентификатор артикула
             * example:
             * 11111111
             */
            chrtId?: number;
            /**
             * Штрихкод товара
             * example:
             * 6665956397512
             */
            barcode?: string;
            /**
             * 0	- Новый заказ 1	- Принял заказ 2	- Сборочное задание завершено 3	- Сборочное задание отклонено 5 - На доставке курьером 6 - Курьер довез и клиент принял товар 7 - Клиент не принял товар
             *
             * example:
             * 2
             */
            status?: 0 | 1 | 2 | 3 | 5 | 6 | 7;
            /**
             * 1 - Отмена клиента 2 - Доставлен 3 - Возврат 4 - Ожидает 5 - Брак
             *
             * example:
             * 2
             */
            userStatus?: 1 | 2 | 3 | 4 | 5;
            /**
             * Уникальный идентификатор вещи, разный у одинаковых chrt_id
             * example:
             * 100321840623
             */
            rid?: string;
            /**
             * Стоимость товара с учетом скидок в копейках!
             * example:
             * 5600
             */
            totalPrice?: number;
            /**
             * Идентификатор транзакции (для группировки заказов)
             */
            orderUID?: string;
            sticker?: {
                /**
                 * Идентификатор этикетки
                 * example:
                 * 2316489753
                 */
                wbStickerId?: number;
                wbStickerIdParts?: {
                    /**
                     * Первая часть идентификатора этикетки (для печати подписи)
                     * example:
                     * 231648
                     */
                    A?: string;
                    /**
                     * Вторая часть идентификатора этикетки
                     * example:
                     * 9753
                     */
                    B?: string;
                };
                /**
                 * Закодированное значение стикера (представляется на этикетке в формате Code-128)
                 * example:
                 * !uKEtQZVx
                 */
                wbStickerEncoded?: string;
                /**
                 * Полное представление этикетки в векторном формате
                 * example:
                 * PD94bWwgdmVyc2lvbj0iMS4wIj8+CjwhLS0gR2VuZXJhdGVkIGJ5IFNWR28gLS0+Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzE4IiB5PSIyMCIgd2lkdGg9IjYiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzI2IiB5PSIyMCIgd2lkdGg9IjIiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzMwIiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMjAiIHk9IjIwMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI5MCIgc3R5bGU9ImZpbGw6YmxhY2siIC8+Cjx0ZXh0IHg9IjMwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOndoaXRlO2ZvbnQtc2l6ZTozMHB0O3RleHQtYW5jaG9yOnN0YXJ0IiA+MjMxNjQ4PC90ZXh0Pgo8dGV4dCB4PSIzNTAiIHk9IjI3MCIgc3R5bGU9ImZpbGw6d2hpdGU7Zm9udC1zaXplOjUwcHQ7dGV4dC1hbmNob3I6ZW5kIiA+OTc1MzwvdGV4dD4KPC9zdmc+Cg==
                 */
                wbStickerSvgBase64?: string;
                /**
                 * Полное представление этикетки в формате ZPL (вертикальное положение)
                 * example:
                 * ^XZ
                 * ^XA
                 * ^CI28
                 * ^CF0
                 * ^LS0
                 * ^FT26,160^BY2^BCN,140,N,N^FD!uKEtQZVx^FS
                 * ^FO30,177^FB200,1,0,L^AZN,35,40^FD231648^FS
                 * ^FO160,173^FB110,1,0,R^AZN,68,50^FD9753^FS
                 * ^LRY^FO20,170^GB280,60,50^FS^LRN
                 * ^XZ
                 */
                wbStickerZplV?: string;
                /**
                 * Полное представление этикетки в формате ZPL (горизонтальное положение)
                 * example:
                 * ^XZ
                 * ^XA
                 * ^CI28
                 * ^CF0
                 * ^LS0
                 * ^FO20,26^BY2^BCR,140,N,N^FD!uKEtQZVx^FS
                 * ^FO177,87^FB200,1,0,L^AZB,35,40^FD231648^FS
                 * ^FO173,50^FB110,1,0,R^AZB,68,50^FD9753^FS
                 * ^LRY^FO170,20^GB60,280,50^FS^LRN
                 * ^XZ
                 */
                wbStickerZpl?: string;
            };
        }
        export interface OrderStatus {
            /**
             * Идентификатор заказа
             */
            orderId?: string;
            /**
             * 0	- Новый заказ 1	- Принял заказ 2	- Сборочное задание завершено 3	- Сборочное задание отклонено 5 - На доставке курьером 6 - Курьер довез и клиент принял товар 7 - Клиент не принял товар
             *
             * example:
             * 2
             */
            status?: 0 | 1 | 2 | 3 | 5 | 6 | 7;
        }
        export interface OrdersAPIResponse {
            /**
             * Общее количество заказов по заданным параметрам (за указанный промежуток времени)
             * example:
             * 1
             */
            total?: number;
            /**
             * Список заказов
             */
            orders?: Order[];
        }
        export interface Parameter {
            count?: number; // float
            units?: string;
            value?: string;
        }
        export type Prices = {
            /**
             * номенклатура
             * example:
             * 1234567
             */
            nmId?: number;
            /**
             * цена (указывать без копеек)
             * example:
             * 1000
             */
            price?: number; // float
        }[];
        /**
         * Создаёт группу новых карточек карточек.
         */
        export interface RequestCardBatchCreate {
            card?: Card[] | null;
            supplierID?: string; // uuid
        }
        /**
         * Получение карточки поставщика по imt id
         */
        export interface RequestCardCardByImtID {
            imtID?: number; // uint64
            supplierID?: string; // uuid
        }
        /**
         * Создаёт одну новую карточку.
         */
        export interface RequestCardCreate {
            card?: Card;
            supplierID?: string; // uuid
        }
        /**
         * Удаляет одну номенклатуру из карточки товара.
         */
        export interface RequestCardDeleteNomenclature {
            nomenclatureID?: number; // int64
            supplierID?: string; // uuid
        }
        /**
         * Позволяет сгенерировать шк для размера
         */
        export interface RequestCardGetBarcodes {
            quantity?: number; // int64
            supplierID?: string; // uuid
        }
        /**
         * Позволяет получить массив карточек товаров, удовлетворяющих фильтру и с указанной сортировкой. **order** - порядок отображения карточек.Может принимать значения **asc** или **desc**.**sort** - какие **columns** и с какими **excludedValues** исключить.**find** - поиск карточке с определённым **search**(значением) в определённом **columns**.**query** позволяет получать не все карточки сразу: **limit** - сколько карточек максимум вывести, **offset** - сколько карточек от самой первой пропустить.
         */
        export interface RequestCardList {
            filter?: Sort;
            isArchive?: boolean;
            query?: Cursor;
            supplierID?: string; // uuid
            withError?: boolean;
        }
        /**
         * Позволяет обновлять карточку товара.Карточка с определённым ID изменяется на ту, которую прислали.
         */
        export interface RequestCardUpdate {
            card?: Card;
            supplierID?: string; // uuid
        }
        export interface RequestFilesDownload {}
        /**
         * Позволяет загружать файлы в хранилище. **fileID** заполняется из названия файла. **data** заполняется из параметра **uploadfile**.
         */
        export interface RequestFilesUploadMultipart {
            data?: unknown; // byte
        }
        export interface ResponseCardBatchCreate {}
        /**
         * Получение карточки поставщика по imt id
         */
        export interface ResponseCardCardByImtID {
            card?: Card;
        }
        export interface ResponseCardCreate {}
        export interface ResponseCardDeleteNomenclature {}
        /**
         * Позволяет сгенерировать шк для размера
         */
        export interface ResponseCardGetBarcodes {
            barcodes?: string[] | null;
        }
        /**
         * Позволяет получить массив карточек товаров, удовлетворяющих фильтру и с указанной сортировкой. **order** - порядок отображения карточек.Может принимать значения **asc** или **desc**.**sort** - какие **columns** и с какими **excludedValues** исключить.**find** - поиск карточке с определённым **search**(значением) в определённом **columns**.**query** позволяет получать не все карточки сразу: **limit** - сколько карточек максимум вывести, **offset** - сколько карточек от самой первой пропустить.
         */
        export interface ResponseCardList {
            cards?: Card[] | null;
            cursor?: Cursor;
        }
        export interface ResponseCardUpdate {}
        /**
         * Позволяет выгружать файлы из хранилища. **data** содержит массив байт, который является файлом.
         */
        export interface ResponseFilesDownload {
            data?: string; // byte
        }
        export interface ResponseFilesUploadMultipart {}
        export type SetStockAPIRequest = {
            /**
             * Баркод
             * example:
             * 656335639
             */
            barcode?: string;
            /**
             * Остаток
             * example:
             * 1
             */
            stock?: number;
            /**
             * ID склада
             * example:
             * 7543
             */
            warehouseId?: number;
        }[];
        export interface SetStocksAPIError {
            error?: boolean;
            errorText?: string;
            additionalErrors?: {
                [key: string]: any;
            }[];
            data?: {
                errors?: {
                    /**
                     * Баркод
                     * example:
                     * 123456789
                     */
                    barcode?: string;
                    /**
                     * Ошибка, случившаяся при загрудке остатка с данным баркодом
                     * example:
                     * указан отрицательный остаток
                     */
                    err?:
                        | '\u0443\u043A\u0430\u0437\u0430\u043D \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A'
                        | '\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u0431\u0430\u0440\u043A\u043E\u0434'
                        | '\u0431\u0430\u0440\u043A\u043E\u0434 \u043D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0443';
                }[];
            };
        }
        export interface Sort {
            filter?: Filter[] | null;
            find?: Find[] | null;
            order?: Order;
        }
        /**
         * Описывает остаток товара
         */
        export interface Stock {
            /**
             * Категория
             * example:
             * Кольца
             */
            subject?: string;
            /**
             * Бренд
             * example:
             * Средиземье
             */
            brand?: string;
            /**
             * Наименование
             * example:
             * Кольцо Всевластья
             */
            name: string;
            /**
             * Размер
             * example:
             * 24
             */
            size?: string;
            /**
             * Баркод
             * example:
             * 656335639
             */
            barcode?: string;
            /**
             * Артикул поставщика
             * example:
             * one-ring-7548
             */
            article?: string;
            /**
             * Остаток
             * example:
             * 1
             */
            stock?: number;
            /**
             * Склад с товаром
             * example:
             * Пещеры Мглистых гор
             */
            warehouseName?: string;
            /**
             * ID склада
             * example:
             * 7543
             */
            warehouseId?: number;
        }
        export interface StocksAPIResponse {
            /**
             * example:
             * 451
             */
            total?: number;
            stocks?: /* Описывает остаток товара */ Stock[];
        }
        export type UpdateOrderStatus = OrderStatus[];
        export interface UpdateOrderStatusError {
            /**
             * Флаг ошибки
             * example:
             * true
             */
            error?: boolean;
            /**
             * Описание ошибки
             * example:
             * Несоответствие статусов сборочных заданий. Проверьте их правильность. Номера заказов: [123, 321]
             */
            errorText?: string;
            data?: {
                [key: string]: any;
            };
            additionalErrors?: {
                [key: string]: any;
            };
        }
        export interface Variation {
            /**
             * Характеристики конкретной вариации номенклатуры
             */
            addin?: Addin[] | null;
            barcode?: string;
            /**
             * Штрихкоды
             */
            barcodes?: string[] | null;
            /**
             * Не используется поставщиком
             */
            chrtId?: number; // uint64
            /**
             * Ошибки от старой спеки
             */
            errors?: string[] | null;
            /**
             * Идентификатор. Генерируется автоматически
             */
            id?: string; // uuid
        }
        export interface Warehouse {
            /**
             * ID склада
             * example:
             * 5235
             */
            id?: number;
            /**
             * Адрес склада
             * example:
             * Рохан, Хельмова Падь
             */
            address?: string;
        }
        export type WarehousesAPIResponse = Warehouse[];
    }
}

declare namespace Paths {
    namespace ApiV2Orders {
        namespace Get {
            namespace Parameters {
                export type DateEnd = string; // date
                export type DateStart = string; // date
                /**
                 * example:
                 * 123456
                 */
                export type Id = number;
                /**
                 * example:
                 * 0
                 */
                export type Skip = number;
                /**
                 * example:
                 * 10
                 */
                export type Take = number;
            }
            export interface QueryParameters {
                date_start: Parameters.DateStart /* date */;
                date_end?: Parameters.DateEnd /* date */;
                take: /**
                 * example:
                 * 10
                 */
                Parameters.Take;
                skip: /**
                 * example:
                 * 0
                 */
                Parameters.Skip;
                id?: /**
                 * example:
                 * 123456
                 */
                Parameters.Id;
            }
            namespace Responses {
                export type $200 = Wildberries.Schemas.OrdersAPIResponse;
            }
        }
        namespace Put {
            export type RequestBody = Wildberries.Schemas.UpdateOrderStatus;
            namespace Responses {
                export interface $200 {}
                export type $400 = Wildberries.Schemas.UpdateOrderStatusError;
                export interface $500 {}
            }
        }
    }
    namespace ApiV2Stocks {
        namespace Get {
            namespace Parameters {
                export type Order = 'asc' | 'desc';
                export type Search = string;
                export type Skip = string;
                export type Sort = 'subject' | 'brand' | 'name' | 'size' | 'barcode' | 'article';
                export type Take = string;
            }
            export interface QueryParameters {
                search?: Parameters.Search;
                skip: Parameters.Skip;
                take: Parameters.Take;
                sort?: Parameters.Sort;
                order?: Parameters.Order;
            }
            namespace Responses {
                export type $200 = Wildberries.Schemas.StocksAPIResponse;
            }
        }
        namespace Post {
            export type RequestBody = Wildberries.Schemas.SetStockAPIRequest;
            namespace Responses {
                export type $200 = Wildberries.Schemas.SetStocksAPIError;
            }
        }
    }
    namespace ApiV2Warehouses {
        namespace Get {
            namespace Responses {
                export type $200 = Wildberries.Schemas.WarehousesAPIResponse;
            }
        }
    }
    namespace CardBatchCreate {
        namespace Post {
            export interface RequestBody {
                /**
                 * example:
                 * 1
                 */
                id?: /**
                 * example:
                 * 1
                 */
                number | string /* uuid */;
                /**
                 * example:
                 * 2.0
                 */
                jsonrpc?: string;
                params?: /* Создаёт группу новых карточек карточек. */ Wildberries.Schemas.RequestCardBatchCreate;
            }
            namespace Responses {
                export type $200 =
                    | {
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                          result?: Wildberries.Schemas.ResponseCardBatchCreate;
                      }
                    | {
                          error?: {
                              /**
                               * example:
                               * -32603
                               */
                              code?: number; // int32
                              data?: {
                                  [key: string]: any;
                              } | null;
                              /**
                               * example:
                               * not found
                               */
                              message?: string;
                          } | null;
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                      };
            }
        }
    }
    namespace CardCardByImtID {
        namespace Post {
            export interface RequestBody {
                /**
                 * example:
                 * 1
                 */
                id?: /**
                 * example:
                 * 1
                 */
                number | string /* uuid */;
                /**
                 * example:
                 * 2.0
                 */
                jsonrpc?: string;
                params?: /* Получение карточки поставщика по imt id */ Wildberries.Schemas.RequestCardCardByImtID;
            }
            namespace Responses {
                export type $200 =
                    | {
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                          result?: /* Получение карточки поставщика по imt id */ Wildberries.Schemas.ResponseCardCardByImtID;
                      }
                    | {
                          error?: {
                              /**
                               * example:
                               * -32603
                               */
                              code?: number; // int32
                              data?: {
                                  [key: string]: any;
                              } | null;
                              /**
                               * example:
                               * not found
                               */
                              message?: string;
                          } | null;
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                      };
            }
        }
    }
    namespace CardCreate {
        namespace Post {
            export interface RequestBody {
                /**
                 * example:
                 * 1
                 */
                id?: /**
                 * example:
                 * 1
                 */
                number | string /* uuid */;
                /**
                 * example:
                 * 2.0
                 */
                jsonrpc?: string;
                params?: /* Создаёт одну новую карточку. */ Wildberries.Schemas.RequestCardCreate;
            }
            namespace Responses {
                export type $200 =
                    | {
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                          result?: Wildberries.Schemas.ResponseCardCreate;
                      }
                    | {
                          error?: {
                              /**
                               * example:
                               * -32603
                               */
                              code?: number; // int32
                              data?: {
                                  [key: string]: any;
                              } | null;
                              /**
                               * example:
                               * not found
                               */
                              message?: string;
                          } | null;
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                      };
            }
        }
    }
    namespace CardDeleteNomenclature {
        namespace Post {
            export interface RequestBody {
                /**
                 * example:
                 * 1
                 */
                id?: /**
                 * example:
                 * 1
                 */
                number | string /* uuid */;
                /**
                 * example:
                 * 2.0
                 */
                jsonrpc?: string;
                params?: /* Удаляет одну номенклатуру из карточки товара. */ Wildberries.Schemas.RequestCardDeleteNomenclature;
            }
            namespace Responses {
                export type $200 =
                    | {
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                          result?: Wildberries.Schemas.ResponseCardDeleteNomenclature;
                      }
                    | {
                          error?: {
                              /**
                               * example:
                               * -32603
                               */
                              code?: number; // int32
                              data?: {
                                  [key: string]: any;
                              } | null;
                              /**
                               * example:
                               * not found
                               */
                              message?: string;
                          } | null;
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                      };
            }
        }
    }
    namespace CardFile$SupplierID$FileID {
        namespace Get {
            namespace Parameters {
                export type FileID = string; // uuid
                export type SupplierID = string; // uuid
            }
            export interface PathParameters {
                supplierID: Parameters.SupplierID /* uuid */;
                fileID: Parameters.FileID /* uuid */;
            }
            namespace Responses {
                export type $200 =
                    /* Позволяет выгружать файлы из хранилища. **data** содержит массив байт, который является файлом.  */ Wildberries.Schemas.ResponseFilesDownload;
            }
        }
    }
    namespace CardGetBarcodes {
        namespace Post {
            export interface RequestBody {
                /**
                 * example:
                 * 1
                 */
                id?: /**
                 * example:
                 * 1
                 */
                number | string /* uuid */;
                /**
                 * example:
                 * 2.0
                 */
                jsonrpc?: string;
                params?: /* Позволяет сгенерировать шк для размера */ Wildberries.Schemas.RequestCardGetBarcodes;
            }
            namespace Responses {
                export type $200 =
                    | {
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                          result?: /* Позволяет сгенерировать шк для размера */ Wildberries.Schemas.ResponseCardGetBarcodes;
                      }
                    | {
                          error?: {
                              /**
                               * example:
                               * -32603
                               */
                              code?: number; // int32
                              data?: {
                                  [key: string]: any;
                              } | null;
                              /**
                               * example:
                               * not found
                               */
                              message?: string;
                          } | null;
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                      };
            }
        }
    }
    namespace CardList {
        namespace Post {
            export interface RequestBody {
                /**
                 * example:
                 * 1
                 */
                id?: /**
                 * example:
                 * 1
                 */
                number | string /* uuid */;
                /**
                 * example:
                 * 2.0
                 */
                jsonrpc?: string;
                params?: /* Позволяет получить массив карточек товаров, удовлетворяющих фильтру и с указанной сортировкой. **order** - порядок отображения карточек.Может принимать значения **asc** или **desc**.**sort** - какие **columns** и с какими **excludedValues** исключить.**find** - поиск карточке с определённым **search**(значением) в определённом **columns**.**query** позволяет получать не все карточки сразу: **limit** - сколько карточек максимум вывести, **offset** - сколько карточек от самой первой пропустить. */ Wildberries.Schemas.RequestCardList;
            }
            namespace Responses {
                export type $200 =
                    | {
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                          result?: /* Позволяет получить массив карточек товаров, удовлетворяющих фильтру и с указанной сортировкой. **order** - порядок отображения карточек.Может принимать значения **asc** или **desc**.**sort** - какие **columns** и с какими **excludedValues** исключить.**find** - поиск карточке с определённым **search**(значением) в определённом **columns**.**query** позволяет получать не все карточки сразу: **limit** - сколько карточек максимум вывести, **offset** - сколько карточек от самой первой пропустить. */ Wildberries.Schemas.ResponseCardList;
                      }
                    | {
                          error?: {
                              /**
                               * example:
                               * -32603
                               */
                              code?: number; // int32
                              data?: {
                                  [key: string]: any;
                              } | null;
                              /**
                               * example:
                               * not found
                               */
                              message?: string;
                          } | null;
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                      };
            }
        }
    }
    namespace CardUpdate {
        namespace Post {
            export interface RequestBody {
                /**
                 * example:
                 * 1
                 */
                id?: /**
                 * example:
                 * 1
                 */
                number | string /* uuid */;
                /**
                 * example:
                 * 2.0
                 */
                jsonrpc?: string;
                params?: /* Позволяет обновлять карточку товара.Карточка с определённым ID изменяется на ту, которую прислали. */ Wildberries.Schemas.RequestCardUpdate;
            }
            namespace Responses {
                export type $200 =
                    | {
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                          result?: Wildberries.Schemas.ResponseCardUpdate;
                      }
                    | {
                          error?: {
                              /**
                               * example:
                               * -32603
                               */
                              code?: number; // int32
                              data?: {
                                  [key: string]: any;
                              } | null;
                              /**
                               * example:
                               * not found
                               */
                              message?: string;
                          } | null;
                          /**
                           * example:
                           * 1
                           */
                          id?: /**
                           * example:
                           * 1
                           */
                          number | string /* uuid */;
                          /**
                           * example:
                           * 2.0
                           */
                          jsonrpc?: string;
                      };
            }
        }
    }
    namespace CardUploadFileMultipart {
        namespace Post {
            export interface HeaderParameters {
                'X-File-Id': Parameters.XFileId /* uuid */;
            }
            namespace Parameters {
                export type XFileId = string; // uuid
            }
            export type RequestBody =
                /* Позволяет загружать файлы в хранилище. **fileID** заполняется из названия файла. **data** заполняется из параметра **uploadfile**. */ Wildberries.Schemas.RequestFilesUploadMultipart;
            namespace Responses {
                export interface $200 {}
            }
        }
    }
    namespace PublicApiV1Info {
        namespace Get {
            namespace Parameters {
                export type Quantity = 0 | 1 | 2;
            }
            export interface QueryParameters {
                quantity?: Parameters.Quantity;
            }
            namespace Responses {
                export type $200 = Wildberries.Schemas.Info;
                export interface $401 {}
                export interface $403 {}
                export interface $500 {}
            }
        }
    }
    namespace PublicApiV1Prices {
        namespace Post {
            export type RequestBody = Wildberries.Schemas.Prices;
            namespace Responses {
                export interface $200 {}
                export type $400 = Wildberries.Schemas.ErrorResponse;
                export interface $401 {}
                export interface $403 {}
                export interface $500 {}
            }
        }
    }
    namespace PublicApiV1RevokeDiscounts {
        namespace Post {
            export interface BodyParameters {
                nmIDs: /**
                 * example:
                 * [
                 *   12345678,
                 *   81234567
                 * ]
                 */
                Parameters.NmIDs;
            }
            namespace Parameters {
                /**
                 * example:
                 * [
                 *   12345678,
                 *   81234567
                 * ]
                 */
                export type NmIDs = number[];
            }
            namespace Responses {
                export type $200 = string;
                export type $400 = string;
                export type $500 = string;
            }
        }
    }
    namespace PublicApiV1RevokePromocodes {
        namespace Post {
            export interface BodyParameters {
                nmIDs: /**
                 * example:
                 * [
                 *   12345678,
                 *   81234567
                 * ]
                 */
                Parameters.NmIDs;
            }
            namespace Parameters {
                /**
                 * example:
                 * [
                 *   12345678,
                 *   81234567
                 * ]
                 */
                export type NmIDs = number[];
            }
            namespace Responses {
                export type $200 = string;
                export type $400 = string;
                export type $500 = string;
            }
        }
    }
    namespace PublicApiV1UpdateDiscounts {
        namespace Post {
            namespace Parameters {
                export type ActivateFrom = string;
            }
            export interface QueryParameters {
                activateFrom?: Parameters.ActivateFrom;
            }
            export type RequestBody = Wildberries.RequestBodies.ModelsNomenclatureArray;
            namespace Responses {
                export type $200 = string;
                export type $400 = string;
                export type $500 = string;
            }
        }
    }
    namespace PublicApiV1UpdatePromocodes {
        namespace Post {
            namespace Parameters {
                export type ActivateFrom = string;
            }
            export interface QueryParameters {
                activateFrom?: Parameters.ActivateFrom;
            }
            export type RequestBody = Wildberries.RequestBodies.ModelsNomenclatureArray;
            namespace Responses {
                export type $200 = string;
                export type $400 = string;
                export type $500 = string;
            }
        }
    }
}

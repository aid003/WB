import dotenv, { parse } from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config()

const link = process.env.SKLAD_LINK


const bot = new TelegramBot(process.env.API_KEY_BOT, {
    
    polling: {
        interval: 200,
        autoStart: true
    }
    
});

bot.on("polling_error", err => console.log(err.data.error.message));

bot.on('text', async msg => {
    if(msg.text === '/start') {

        await bot.sendMessage(msg.chat.id, `Beta версия бота для вб. \n\n\n\nНе запрашиваем статистику чаще 1 раза в минуту, иначе БАН от вб. \n\n\nДанные обновляются в течении 30 мин\n\n\nСообщения доходят в течении 1 минуты`);

    }

	if(msg.text === "/stats" ) {
        let datas = []
    
        try {
          await fetch(link, { method: "GET", headers: { "content-type": "application/json;charset=UTF-8", "Authorization": process.env.WB_TOKEN }}).then((response) => response.json()).then((data) => {datas = data})
  
          const filteredData = datas.filter(item => item.quantity > 0);
          const groupedData = {};
    
          filteredData.forEach(item => {
              if (!groupedData[item.nmId]) {
                  groupedData[item.nmId] = {
                      nmId: item.nmId,
                      totalQuantity: 0,
                      warehouses: {},
                      subject: item.subject
                  };
              }
    
            if (!groupedData[item.nmId].warehouses[item.warehouseName]) {
                groupedData[item.nmId].warehouses[item.warehouseName] = {
                    quantity: 0,
                    quantityFull: 0,
                    inWayFromClient: 0,
                    inWayToClient: 0
                };
            }
    
            groupedData[item.nmId].warehouses[item.warehouseName].quantity += item.quantity;
            groupedData[item.nmId].warehouses[item.warehouseName].quantityFull += item.quantityFull;
            groupedData[item.nmId].warehouses[item.warehouseName].inWayFromClient += item.inWayFromClient;
            groupedData[item.nmId].warehouses[item.warehouseName].inWayToClient += item.inWayToClient;
            groupedData[item.nmId].totalQuantity += item.quantityFull - item.inWayToClient;
        });
    
        let result = "";
    
        Object.values(groupedData).forEach(item => {
            result += `<b>${item.subject}</b>: (${item.nmId}) --- ❗️<b>${item.totalQuantity}</b> шт❗️\n\n`;
            Object.entries(item.warehouses).forEach(([warehouseName, warehouseItem]) => {
                result += `\t${warehouseName}:\n`;
                result += `\t\tможно заказать: ${warehouseItem.quantity}\n`;
                result += `\t\tобщее количество: ${warehouseItem.quantityFull}\n`;
                result += `\t\tв пути от клиента: ${warehouseItem.inWayFromClient}\n`;
                result += `\t\tв пути к клиенту: ${warehouseItem.inWayToClient}\n`;
            });
  
            bot.sendMessage(msg.chat.id, result, {parse_mode: "HTML"});
            result = ""
        })
  
      } catch (error) {
        if(error.name == "TypeError") {
            await bot.sendMessage(msg.chat.id, "Превышено количество запросов, ожидаем 1-2 минуты...")
        }
        
        await bot.sendMessage(msg.chat.id, `Ошибка: ${error}\n\n(техническая информация)`)
        bot.sendMessage(msg.chat.id, "PS: при повторном обращении таймер сбрасывается")
        }
    }




    if(msg.text === "/min_stats" ) {
        let result_end = "";
        let datas = []
    
        try {
          await fetch(link, { method: "GET", headers: { "content-type": "application/json;charset=UTF-8", "Authorization": process.env.WB_TOKEN }}).then((response) => response.json()).then((data) => {datas = data})
  
          const filteredData = datas.filter(item => item.quantity > 0);
          const groupedData = {};
    
          filteredData.forEach(item => {
              if (!groupedData[item.nmId]) {
                  groupedData[item.nmId] = {
                      nmId: item.nmId,
                      quantity: 0,
                      totalQuantity: 0,
                      warehouses: {},
                      subject: item.subject
                  };
              }
    
            if (!groupedData[item.nmId].warehouses[item.warehouseName]) {
                groupedData[item.nmId].warehouses[item.warehouseName] = {
                    quantity: 0,
                    quantityFull: 0,
                    inWayFromClient: 0,
                    inWayToClient: 0
                };
            }
    
            groupedData[item.nmId].warehouses[item.warehouseName].quantity += item.quantity;
            groupedData[item.nmId].warehouses[item.warehouseName].quantityFull += item.quantityFull;
            groupedData[item.nmId].warehouses[item.warehouseName].inWayFromClient += item.inWayFromClient;
            groupedData[item.nmId].totalQuantity += item.quantityFull - item.inWayToClient;
            groupedData[item.nmId].quantity += item.quantity
        });
    
        Object.values(groupedData).forEach(item => {
            result_end += `<b>${item.subject}</b>: (${item.nmId}) --- <b>${item.quantity} | ${item.totalQuantity}</b> шт \n`
        })
         await bot.sendMessage(msg.chat.id, result_end, {parse_mode: "HTML"})
         result_end = ""
  
      } catch (error) {
        if(error.name == "TypeError") {
            await bot.sendMessage(msg.chat.id, "Превышено количество запросов, ожидаем 1-2 минуты...")
        }
        await bot.sendMessage(msg.chat.id, `Ошибка: ${error}\n\n(техническая информация)`)
        bot.sendMessage(msg.chat.id, "PS: при повторном обращении таймер сбрасывается")
    }
    }

    if(msg.text === "/anal" ) {
        bot.sendMessage(msg.chat.id, "РАЗРАБОТКА........")
    }
    
})













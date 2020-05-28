import bridge from '@vkontakte/vk-bridge';

// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});
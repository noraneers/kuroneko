/*

    This is a sample bot that provides a simple todo list function
    and demonstrates the Botkit storage system.

    Botkit comes with a generic storage system that can be used to
    store arbitrary information about a user or channel. Storage
    can be backed by a built in JSON file system, or one of many
    popular database systems.

    See:

        botkit-storage-mongo
        botkit-storage-firebase
        botkit-storage-redis
        botkit-storage-dynamodb
        botkit-storage-mysql

*/

module.exports = function(controller) {

    controller.hears(['emoji'], 'direct_message', function(bot, message) {

        // load user from storage...
        controller.storage.users.get(message.user, function(err, user) {
            bot.reply(message, ':emoji:');
        });

    });
}

module.exports = async function(ws, data, send, vars, evars) {
    var broadcast = evars.broadcast;

    var db = vars.db;
    var user = vars.user;
    var san_nbr = vars.san_nbr;
    var world = vars.world;
    var tile_database = vars.tile_database;

    if(!user.superuser) return;

    var tileX = san_nbr(data.tileX);
    var tileY = san_nbr(data.tileY);

    tile_database.write(null, tile_database.types.clear, {
        tileX, tileY, user, world,
        date: Date.now()
    });
}
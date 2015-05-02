var postcss = require('postcss');

module.exports = postcss.plugin('postcss-canadian-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.eachDecl(function transformDecl(decl) {
            decl.prop  = decl.prop.replace('colour', 'color');
            decl.value = decl.value.replace('grey', 'gray');

            if (decl.value.indexOf('!sorry') >= 0) {
                decl.value = decl.value.replace(/\s*!sorry\s*/, '');
                decl.important = true;
            }
        });
    };
});

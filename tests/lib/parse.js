"use strict";

module.exports = process.env.GRUNTEXCELVOC_COV ? require('./../../lib-cov/parse') : require('./../../lib/parse');

// Copyright 2012 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @preserve
 * @filename walkers/row_walker.js
 */

/**
 * @fileoverview A class for walking rows.
 * @author dtseng@google.com (David Tseng)
 */


goog.provide('cvox.RowWalker');

goog.require('cvox.TableWalker');


/**
 * @constructor
 * @extends {cvox.TableWalker}
 */
cvox.RowWalker = function() {
  goog.base(this);
};
goog.inherits(cvox.RowWalker, cvox.TableWalker);


/**
 * @override
 */
cvox.RowWalker.prototype.next = function(sel) {
  return this.nextRow(sel);
};


/**
 * @override
 */
cvox.RowWalker.prototype.getGranularityMsg = function() {
  return cvox.ChromeVox.msgs.getMsg('row_granularity');
};

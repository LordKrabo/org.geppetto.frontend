/*******************************************************************************
 * The MIT License (MIT)
 *
 * Copyright (c) 2011, 2013 OpenWorm.
 * http://openworm.org
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the MIT License
 * which accompanies this distribution, and is available at
 * http://opensource.org/licenses/MIT
 *
 * Contributors:
 *      OpenWorm - http://openworm.org/people.html
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 *******************************************************************************/

/**
 * Client class use to represent a composite variable node, used for simulation
 * tree state variables.
 * 
 * @module model/Instance
 * @author Giovanni Idili
 */
define(function(require) {
	var Node = require('model/Node');

	return Node.Model.extend({
		variable : null,
		children: [],
		
		/**
		 * Initializes this node with passed attributes
		 * 
		 * @param {Object} options - Object with options attributes to initialize node
		 */
		initialize : function(options) {
			this.variable = options.variable;
			this.id = options.id;
			this.name = options.name;
			this.instancePath = options.instancePath;
			this._metaType = options._metaType;
		},
		
		/**
		 * Get the type for this instance
		 * 
		 * @command Instance.getType()
		 * 
		 * @returns {List<Type>} - array of types
		 * 
		 */
		getType : function() {
			// TODO: fetch types from wrapped obj
			// NOTE: an instance can only have one type but the variable can have multiple types - how to pick the right one?
			return this.variable.getTypes();
		},
		
		/**
		 * Get this instance children
		 * 
		 * @command Instance.getChildren()
		 * 
		 * @returns {List<Instance>} - List of instances
		 * 
		 */
		getChildren : function() {
			return this.children;
		},

		
	});
});
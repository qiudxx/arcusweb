/**
 * Copyright 2019 Arcus Project
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import baseMixin from './base';
import _ from 'lodash';
import SubsystemCapabilityRoutes from './capability/Subsystem';
import subsystemData from 'i2web/models/fixtures/data/subsystem.json';

let Subsystem = { // eslint-disable-line prefer-const
  address: ['SERV:subcare:', 'SERV:subs', 'SERV:subsecurity:', 'SERV:subsafety:', 'SERV:subwater:'],
};

export default {
  init() {
    const data = _.cloneDeep(subsystemData);
    return Object.assign(Subsystem, SubsystemCapabilityRoutes, baseMixin(data));
  },
};

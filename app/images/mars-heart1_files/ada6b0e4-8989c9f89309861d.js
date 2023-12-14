"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7192],{29931:function(e,t,r){r.d(t,{JU:function(){return ib},QT:function(){return ij},ad:function(){return iR}});var i,n,s=r(85500),a=r(46387),o=r(68207),l=r(83395),u=r(5146);r(34406);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let d="9.6.9",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(v);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(v);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(v);f.warn(`Firestore (${d}): ${e}`,...r)}}function v(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(r){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,i=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),n=new I;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new I,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=n;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new I)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var r;return this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new S(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class N{constructor(e,t,r){this.type="FirstParty",this.user=c.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);let i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class k{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){let r=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.p;return this.p=e.token,g("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let i=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){let e=this.g.getImmediate({optional:!0});e?i(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||w(),this.p=e.token,new _(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class D{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function L(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let i=0;i<e;i++)r[i]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ D.A=-1;class R{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=L(40);for(let n=0;n<i.length;++n)r.length<20&&i[n]<t&&(r+=e.charAt(i[n]%e.length))}return r}}function V(e,t){return e<t?-1:e>t?1:0}function F(e,t,r){return e.length===t.length&&e.every((e,i)=>r(e,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return x.fromMillis(Date.now())}static fromDate(e){return x.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new x(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new x(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function U(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P{constructor(e,t,r){void 0===t?t=0:t>e.length&&w(),void 0===r?r=e.length-t:r>e.length-t&&w(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===P.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof P?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let n=e.get(i),s=t.get(i);if(n<s)return -1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends P{construct(e,t,r){return new q(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}let B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends P{construct(e,t,r){return new K(e,t,r)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,n=()=>{if(0===r.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;i<e.length;){let a=e[i];if("\\"===a){if(i+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[i+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=o,i+=2}else"`"===a?(s=!s,i++):"."!==a||s?(r+=a,i++):(n(),i++)}if(n(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new z(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new z(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}z.EMPTY_BYTE_STRING=new z("");let $=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function G(e){if(!e&&w(),"string"==typeof e){let t=0,r=$.exec(e);if(!r&&w(),r[1]){let i=r[1];t=Number(i=(i+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:j(e.seconds),nanos:j(e.nanos)}}function j(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Q(e){return"string"==typeof e?z.fromBase64String(e):z.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function H(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function W(e){let t=G(e.mapValue.fields.__local_write_time__.timestampValue);return new x(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y{constructor(e,t,r,i,n,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=n,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class X{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new X("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof X&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z(e){return null==e}function J(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ee{constructor(e){this.path=e}static fromPath(e){return new ee(q.fromString(e))}static fromName(e){return new ee(q.fromString(e).popFirst(5))}static empty(){return new ee(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new q(e.slice()))}}function et(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?H(e)?4:ef(e)?9:10:w()}function er(e,t){var r,i,n,s;if(e===t)return!0;let a=et(e);if(a!==et(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return W(e).isEqual(W(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=G(e.timestampValue),i=G(t.timestampValue);return r.seconds===i.seconds&&r.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return Q(e.bytesValue).isEqual(Q(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return j(e.geoPointValue.latitude)===j(t.geoPointValue.latitude)&&j(e.geoPointValue.longitude)===j(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return j(e.integerValue)===j(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=j(e.doubleValue),i=j(t.doubleValue);return r===i?J(r)===J(i):isNaN(r)&&isNaN(i)}return!1}(e,t);case 9:return F(e.arrayValue.values||[],t.arrayValue.values||[],er);case 10:return function(e,t){let r=e.mapValue.fields||{},i=t.mapValue.fields||{};if(M(r)!==M(i))return!1;for(let n in r)if(r.hasOwnProperty(n)&&(void 0===i[n]||!er(r[n],i[n])))return!1;return!0}(e,t);default:return w()}}function ei(e,t){return void 0!==(e.values||[]).find(e=>er(e,t))}function en(e,t){if(e===t)return 0;let r=et(e),i=et(t);if(r!==i)return V(r,i);switch(r){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=j(e.integerValue||e.doubleValue),i=j(t.integerValue||t.doubleValue);return r<i?-1:r>i?1:r===i?0:isNaN(r)?isNaN(i)?0:-1:1}(e,t);case 3:return es(e.timestampValue,t.timestampValue);case 4:return es(W(e),W(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(e,t){let r=Q(e),i=Q(t);return r.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),i=t.split("/");for(let n=0;n<r.length&&n<i.length;n++){let s=V(r[n],i[n]);if(0!==s)return s}return V(r.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=V(j(e.latitude),j(t.latitude));return 0!==r?r:V(j(e.longitude),j(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],i=t.values||[];for(let n=0;n<r.length&&n<i.length;++n){let s=en(r[n],i[n]);if(s)return s}return V(r.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){let r=e.fields||{},i=Object.keys(r),n=t.fields||{},s=Object.keys(n);i.sort(),s.sort();for(let a=0;a<i.length&&a<s.length;++a){let o=V(i[a],s[a]);if(0!==o)return o;let l=en(r[i[a]],n[s[a]]);if(0!==l)return l}return V(i.length,s.length)}(e.mapValue,t.mapValue);default:throw w()}}function es(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return V(e,t);let r=G(e),i=G(t),n=V(r.seconds,i.seconds);return 0!==n?n:V(r.nanos,i.nanos)}function ea(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=G(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Q(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,ee.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let i of e.values||[])r?r=!1:t+=",",t+=ea(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",i=!0;for(let n of t)i?i=!1:r+=",",r+=`${n}:${ea(e.fields[n])}`;return r+"}"}(e.mapValue):w()}function eo(e){return!!e&&"integerValue"in e}function el(e){return!!e&&"arrayValue"in e}function eu(e){return!!e&&"nullValue"in e}function eh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ec(e){return!!e&&"mapValue"in e}function ed(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return U(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ed(r)),t}if(e.arrayValue){let r={arrayValue:{values:[]}};for(let i=0;i<(e.arrayValue.values||[]).length;++i)r.arrayValue.values[i]=ed(e.arrayValue.values[i]);return r}return Object.assign({},e)}function ef(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class em{constructor(e){this.value=e}static empty(){return new em({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!ec(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ed(t)}setAll(e){let t=K.emptyPath(),r={},i=[];e.forEach((e,n)=>{if(!t.isImmediateParentOf(n)){let s=this.getFieldsMap(t);this.applyChanges(s,r,i),r={},i=[],t=n.popLast()}e?r[n.lastSegment()]=ed(e):i.push(n.lastSegment())});let n=this.getFieldsMap(t);this.applyChanges(n,r,i)}delete(e){let t=this.field(e.popLast());ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ec(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){for(let i of(U(t,(t,r)=>e[t]=r),r))delete e[i]}clone(){return new em(ed(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eg{constructor(e,t,r,i,n,s){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.data=n,this.documentState=s}static newInvalidDocument(e){return new eg(e,0,O.min(),O.min(),em.empty(),0)}static newFoundDocument(e,t,r){return new eg(e,1,t,O.min(),r,0)}static newNoDocument(e,t){return new eg(e,2,t,O.min(),em.empty(),0)}static newUnknownDocument(e,t){return new eg(e,3,t,O.min(),em.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=em.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=em.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eg&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eg(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ep{constructor(e,t=null,r=[],i=[],n=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=n,this.startAt=s,this.endAt=a,this.P=null}}function ey(e,t=null,r=[],i=[],n=null,s=null,a=null){return new ep(e,t,r,i,n,s,a)}function ev(e){var t;let r=e;if(null===r.P){let i=r.path.canonicalString();null!==r.collectionGroup&&(i+="|cg:"+r.collectionGroup),i+="|f:",i+=r.filters.map(e=>{var t;return e.field.canonicalString()+e.op.toString()+ea(t=e.value)}).join(","),i+="|ob:",i+=r.orderBy.map(e=>{var t;return e.field.canonicalString()+e.dir}).join(","),Z(r.limit)||(i+="|l:",i+=r.limit),r.startAt&&(i+="|lb:",i+=r.startAt.inclusive?"b:":"a:",i+=r.startAt.position.map(e=>{var t;return ea(e)}).join(",")),r.endAt&&(i+="|ub:",i+=r.endAt.inclusive?"a:":"b:",i+=r.endAt.position.map(e=>{var t;return ea(e)}).join(",")),r.P=i}return r.P}function ew(e,t){var r,i;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!eR(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(r=e.filters[s],i=t.filters[s],r.op!==i.op||!r.field.isEqual(i.field)||!er(r.value,i.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eF(e.startAt,t.startAt)&&eF(e.endAt,t.endAt)}function eE(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class eT extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,r):new eI(e,t,r):"array-contains"===t?new eN(e,r):"in"===t?new ek(e,r):"not-in"===t?new e_(e,r):"array-contains-any"===t?new eb(e,r):new eT(e,t,r)}static V(e,t,r){return"in"===t?new eS(e,r):new eC(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(en(t,this.value)):null!==t&&et(this.value)===et(t)&&this.v(en(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eI extends eT{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){let t=ee.comparator(e.key,this.key);return this.v(t)}}class eS extends eT{constructor(e,t){super(e,"in",t),this.keys=eA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eC extends eT{constructor(e,t){super(e,"not-in",t),this.keys=eA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eA(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>ee.fromName(e.referenceValue))}class eN extends eT{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return el(t)&&ei(t.arrayValue,this.value)}}class ek extends eT{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ei(this.value.arrayValue,t)}}class e_ extends eT{constructor(e,t){super(e,"not-in",t)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ei(this.value.arrayValue,t)}}class eb extends eT{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!el(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ei(this.value.arrayValue,e))}}class eD{constructor(e,t){this.position=e,this.inclusive=t}}class eL{constructor(e,t="asc"){this.field=e,this.dir=t}}function eR(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function eV(e,t,r){let i=0;for(let n=0;n<e.position.length;n++){let s=t[n],a=e.position[n];if(i=s.field.isKeyField()?ee.comparator(ee.fromName(a.referenceValue),r.key):en(a,r.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function eF(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!er(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ex{constructor(e,t=null,r=[],i=[],n=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=n,this.limitType=s,this.startAt=a,this.endAt=o,this.D=null,this.C=null,this.startAt,this.endAt}}function eO(e){return new ex(e)}function eM(e){return!Z(e.limit)&&"F"===e.limitType}function eU(e){return!Z(e.limit)&&"L"===e.limitType}function eP(e){var t,r;let i=e;if(null===i.D){i.D=[];let n=function(e){for(let t of e.filters)if(t.S())return t.field;return null}(i),s=(r=i).explicitOrderBy.length>0?r.explicitOrderBy[0].field:null;if(null!==n&&null===s)n.isKeyField()||i.D.push(new eL(n)),i.D.push(new eL(K.keyField(),"asc"));else{let a=!1;for(let o of i.explicitOrderBy)i.D.push(o),o.field.isKeyField()&&(a=!0);if(!a){let l=i.explicitOrderBy.length>0?i.explicitOrderBy[i.explicitOrderBy.length-1].dir:"asc";i.D.push(new eL(K.keyField(),l))}}}return i.D}function eq(e){var t;let r=e;if(!r.C){if("F"===r.limitType)r.C=ey(r.path,r.collectionGroup,eP(r),r.filters,r.limit,r.startAt,r.endAt);else{let i=[];for(let n of eP(r)){let s="desc"===n.dir?"asc":"desc";i.push(new eL(n.field,s))}let a=r.endAt?new eD(r.endAt.position,!r.endAt.inclusive):null,o=r.startAt?new eD(r.startAt.position,!r.startAt.inclusive):null;r.C=ey(r.path,r.collectionGroup,i,r.filters,r.limit,a,o)}}return r.C}function eB(e,t){return ew(eq(e),eq(t))&&e.limitType===t.limitType}function eK(e){return`${ev(eq(e))}|lt:${e.limitType}`}function ez(e){var t;let r;return`Query(target=${r=(t=eq(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>{var t;return`${e.field.canonicalString()} ${e.op} ${ea(t=e.value)}`}).join(", ")}]`),Z(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>{var t;return`${e.field.canonicalString()} (${e.dir})`}).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>{var t;return ea(e)}).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>{var t;return ea(e)}).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function e$(e,t){var r,i;return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):ee.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e.explicitOrderBy)if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let i=eV(e,t,r);return e.inclusive?i<=0:i<0}(e.startAt,eP(e),t))&&(!e.endAt||!!function(e,t,r){let i=eV(e,t,r);return e.inclusive?i>=0:i>0}(e.endAt,eP(e),t))}function eG(e){return(t,r)=>{let i=!1;for(let n of eP(e)){let s=ej(n,t,r);if(0!==s)return s;i=i||n.field.isKeyField()}return 0}}function ej(e,t,r){let i=e.field.isKeyField()?ee.comparator(t.key,r.key):function(e,t,r){let i=t.data.field(e),n=r.data.field(e);return null!==i&&null!==n?en(i,n):w()}(e.field,t,r);switch(e.dir){case"asc":return i;case"desc":return -1*i;default:return w()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eQ{constructor(){this._=void 0}}function eH(e,t,r){return e instanceof eY?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(r,t):e instanceof eX?eZ(e,t):e instanceof eJ?e0(e,t):function(e,t){var r;let i=function(e,t){var r;return e instanceof e1?eo(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}(e,t),n=e2(i)+e2(e.k);return eo(i)&&eo(e.k)?{integerValue:""+n}:/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}(e.M,n)}(e,t)}function eW(e,t,r){return e instanceof eX?eZ(e,t):e instanceof eJ?e0(e,t):r}class eY extends eQ{}class eX extends eQ{constructor(e){super(),this.elements=e}}function eZ(e,t){let r=e4(t);for(let i of e.elements)r.some(e=>er(e,i))||r.push(i);return{arrayValue:{values:r}}}class eJ extends eQ{constructor(e){super(),this.elements=e}}function e0(e,t){let r=e4(t);for(let i of e.elements)r=r.filter(e=>!er(e,i));return{arrayValue:{values:r}}}class e1 extends eQ{constructor(e,t){super(),this.M=e,this.k=t}}function e2(e){return j(e.integerValue||e.doubleValue)}function e4(e){return el(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function e3(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class e6{}function e5(e,t,r){e instanceof te?function(e,t,r){let i=e.value.clone(),n=ti(e.fieldTransforms,t,r.transformResults);i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(e,t,r):e instanceof tt?function(e,t,r){if(!e3(e.precondition,t))return void t.convertToUnknownDocument(r.version);let i=ti(e.fieldTransforms,t,r.transformResults),n=t.data;n.setAll(tr(e)),n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,t,r):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,r)}function e9(e,t,r){var i,n;e instanceof te?function(e,t,r){if(!e3(e.precondition,t))return;let i=e.value.clone(),n=tn(e.fieldTransforms,r,t);i.setAll(n),t.convertToFoundDocument(e7(t),i).setHasLocalMutations()}(e,t,r):e instanceof tt?function(e,t,r){if(!e3(e.precondition,t))return;let i=tn(e.fieldTransforms,r,t),n=t.data;n.setAll(tr(e)),n.setAll(i),t.convertToFoundDocument(e7(t),n).setHasLocalMutations()}(e,t,r):e3(e.precondition,t)&&t.convertToNoDocument(O.min())}function e8(e,t){var r,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===r&&void 0===i||!(!r||!i)&&F(r,i,(e,t)=>{var r,i,n,s;return e.field.isEqual(t.field)&&(n=e.transform,s=t.transform,n instanceof eX&&s instanceof eX||n instanceof eJ&&s instanceof eJ?F(n.elements,s.elements,er):n instanceof e1&&s instanceof e1?er(n.k,s.k):n instanceof eY&&s instanceof eY)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function e7(e){return e.isFoundDocument()?e.version:O.min()}class te extends e6{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}}class tt extends e6{constructor(e,t,r,i,n=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=n,this.type=1}}function tr(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let i=e.data.field(r);t.set(r,i)}}),t}function ti(e,t,r){var i;let n=new Map;(i=e.length===r.length)||w();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);n.set(a.field,eW(o,l,r[s]))}return n}function tn(e,t,r){let i=new Map;for(let n of e){let s=n.transform,a=r.data.field(n.field);i.set(n.field,eH(s,a,t))}return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ts{constructor(e){this.count=e}}function ta(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case i.OK:return E.OK;case i.CANCELLED:return E.CANCELLED;case i.UNKNOWN:return E.UNKNOWN;case i.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case i.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case i.INTERNAL:return E.INTERNAL;case i.UNAVAILABLE:return E.UNAVAILABLE;case i.UNAUTHENTICATED:return E.UNAUTHENTICATED;case i.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case i.NOT_FOUND:return E.NOT_FOUND;case i.ALREADY_EXISTS:return E.ALREADY_EXISTS;case i.PERMISSION_DENIED:return E.PERMISSION_DENIED;case i.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case i.ABORTED:return E.ABORTED;case i.OUT_OF_RANGE:return E.OUT_OF_RANGE;case i.UNIMPLEMENTED:return E.UNIMPLEMENTED;case i.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(n=i||(i={}))[n.OK=0]="OK",n[n.CANCELLED=1]="CANCELLED",n[n.UNKNOWN=2]="UNKNOWN",n[n.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",n[n.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",n[n.NOT_FOUND=5]="NOT_FOUND",n[n.ALREADY_EXISTS=6]="ALREADY_EXISTS",n[n.PERMISSION_DENIED=7]="PERMISSION_DENIED",n[n.UNAUTHENTICATED=16]="UNAUTHENTICATED",n[n.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",n[n.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",n[n.ABORTED=10]="ABORTED",n[n.OUT_OF_RANGE=11]="OUT_OF_RANGE",n[n.UNIMPLEMENTED=12]="UNIMPLEMENTED",n[n.INTERNAL=13]="INTERNAL",n[n.UNAVAILABLE=14]="UNAVAILABLE",n[n.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[i,n]of r)if(this.equalsFn(i,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(void 0===i)return this.inner[r]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return 1===r.length?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){U(this.inner,(t,r)=>{for(let[i,n]of r)e(i,n)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tl{constructor(e,t){this.comparator=e,this.root=t||th.EMPTY}insert(e,t){return new tl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,th.BLACK,null,null))}remove(e){return new tl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,th.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(0===i)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tu(this.root,e,this.comparator,!0)}}class tu{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=t?r(e.key,t):1,t&&i&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(0===n){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class th{constructor(e,t,r,i,n){this.key=e,this.value=t,this.color=null!=r?r:th.RED,this.left=null!=i?i:th.EMPTY,this.right=null!=n?n:th.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,n){return new th(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,n=r(e,i.key);return(i=n<0?i.copy(null,null,null,i.left.insert(e,t,r),null):0===n?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return th.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return th.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,th.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,th.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}th.EMPTY=null,th.RED=!0,th.BLACK=!1,th.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,r,i,n){return this}insert(e,t,r){return new th(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc{constructor(e){this.comparator=e,this.data=new tl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new td(this.data.getIterator())}getIteratorFrom(e){return new td(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tc)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(i,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tc(this.comparator);return t.data=e,t}}class td{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tf=new tl(ee.comparator),tm=new tl(ee.comparator);function tg(){return new to(e=>e.toString(),(e,t)=>e.isEqual(t))}new tl(ee.comparator);let tp=new tc(ee.comparator);function ty(...e){let t=tp;for(let r of e)t=t.add(r);return t}let tv=new tc(V);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tw{constructor(e,t,r,i,n){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(e,t){let r=new Map;return r.set(e,tE.createSynthesizedTargetChangeForCurrentChange(e,t)),new tw(O.min(),r,tv,tf,ty())}}class tE{constructor(e,t,r,i,n){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(e,t){return new tE(z.EMPTY_BYTE_STRING,t,ty(),ty(),ty())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tT{constructor(e,t,r,i){this.O=e,this.removedTargetIds=t,this.key=r,this.$=i}}class tI{constructor(e,t){this.targetId=e,this.F=t}}class tS{constructor(e,t,r=z.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class tC{constructor(){this.B=0,this.L=tk(),this.q=z.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.q=e)}H(){let e=ty(),t=ty(),r=ty();return this.L.forEach((i,n)=>{switch(n){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:w()}}),new tE(this.q,this.U,e,t,r)}J(){this.K=!1,this.L=tk()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class tA{constructor(e){this.nt=e,this.st=new Map,this.it=tf,this.rt=tN(),this.ot=new tc(V)}at(e){for(let t of e.O)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.ct(t,e.key,e.$);for(let r of e.removedTargetIds)this.ct(r,e.key,e.$)}ht(e){this.forEachTarget(e,t=>{let r=this.lt(t);switch(e.state){case 0:this.ft(t)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(t);break;case 3:this.ft(t)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),r.W(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,r)=>{this.ft(r)&&t(r)})}_t(e){let t=e.targetId,r=e.F.count,i=this.wt(t);if(i){let n=i.target;if(eE(n)){if(0===r){let s=new ee(n.path);this.ct(t,s,eg.newNoDocument(s,O.min()))}else{var a;(a=1===r)||w()}}else this.gt(t)!==r&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){let t=new Map;this.st.forEach((r,i)=>{let n=this.wt(i);if(n){if(r.current&&eE(n.target)){let s=new ee(n.target.path);null!==this.it.get(s)||this.It(i,s)||this.ct(i,s,eg.newNoDocument(s,e))}r.j&&(t.set(i,r.H()),r.J())}});let r=ty();this.rt.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{let t=this.wt(e);return!t||2===t.purpose||(i=!1,!1)}),i&&(r=r.add(e))}),this.it.forEach((t,r)=>r.setReadTime(e));let i=new tw(e,t,this.ot,this.it,r);return this.it=tf,this.rt=tN(),this.ot=new tc(V),i}ut(e,t){if(!this.ft(e))return;let r=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,r),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,r){if(!this.ft(e))return;let i=this.lt(e);this.It(e,t)?i.Y(t,1):i.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),r&&(this.it=this.it.insert(t,r))}removeTarget(e){this.st.delete(e)}gt(e){let t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new tC,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new tc(V),this.rt=this.rt.insert(e,t)),t}ft(e){let t=null!==this.wt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}wt(e){let t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new tC),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function tN(){return new tl(ee.comparator)}function tk(){return new tl(ee.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let t_={asc:"ASCENDING",desc:"DESCENDING"},tb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class tD{constructor(e,t){this.databaseId=e,this.N=t}}function tL(e){return!e&&w(),O.fromTimestamp(function(e){let t=G(e);return new x(t.seconds,t.nanos)}(e))}function tR(e){var t;let r=q.fromString(e);return tP(r)||w(),r}function tV(e,t){let r=tR(t);if(r.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new ee(tO(r))}function tF(e,t){var r,i,n;return r=e.databaseId,new q(["projects",r.projectId,"databases",r.database]).child("documents").child(t).canonicalString()}function tx(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tO(e){var t;return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function tM(e){return{fieldPath:e.canonicalString()}}function tU(e){return K.fromServerFormat(e.fieldPath)}function tP(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}class tq{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tB{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new tB((r,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof tB?t:tB.resolve(t)}catch(r){return tB.reject(r)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):tB.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):tB.reject(t)}static resolve(e){return new tB((t,r)=>{t(e)})}static reject(e){return new tB((t,r)=>{r(e)})}static waitFor(e){return new tB((t,r)=>{let i=0,n=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++n,s&&n===i&&t()},e=>r(e))}),s=!0,n===i&&t()})}static or(e){let t=tB.resolve(!1);for(let r of e)t=t.next(e=>e?tB.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,i)=>{r.push(t.call(this,e,i))}),this.waitFor(r)}}function tK(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tz{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let n=this.mutations[i];n.key.isEqual(e.key)&&e5(n,e,r[i])}}applyToLocalView(e){for(let t of this.baseMutations)t.key.isEqual(e.key)&&e9(t,e,this.localWriteTime);for(let r of this.mutations)r.key.isEqual(e.key)&&e9(r,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{let r=e.get(t.key);this.applyToLocalView(r),r.isValidDocument()||r.convertToNoDocument(O.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ty())}isEqual(e){return this.batchId===e.batchId&&F(this.mutations,e.mutations,(e,t)=>e8(e,t))&&F(this.baseMutations,e.baseMutations,(e,t)=>e8(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t${constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tG{constructor(e,t,r,i,n=O.min(),s=O.min(),a=z.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new tG(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new tG(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tG(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tj{constructor(e){this.Jt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tQ{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(j(e.integerValue));else if("doubleValue"in e){let r=j(e.doubleValue);isNaN(r)?this.ne(t,13):(this.ne(t,15),J(r)?t.se(0):t.se(r))}else if("timestampValue"in e){let i=e.timestampValue;this.ne(t,20),"string"==typeof i?t.ie(i):(t.ie(`${i.seconds||""}`),t.se(i.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ae(Q(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ue(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?ef(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):w()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){let r=e.fields||{};for(let i of(this.ne(t,55),Object.keys(r)))this.re(i,t),this.te(r[i],t)}he(e,t){let r=e.values||[];for(let i of(this.ne(t,50),r))this.te(i,t)}ue(e,t){this.ne(t,37),ee.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}tQ.fe=new tQ;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tH{constructor(){this.Ue=new tW}addToCollectionParentIndex(e,t){return this.Ue.add(t),tB.resolve()}getCollectionParents(e,t){return tB.resolve(this.Ue.getEntries(t))}addFieldIndex(e,t){return tB.resolve()}deleteFieldIndex(e,t){return tB.resolve()}getDocumentsMatchingTarget(e,t){return tB.resolve(null)}getFieldIndex(e,t){return tB.resolve(null)}getFieldIndexes(e,t){return tB.resolve([])}getNextCollectionGroupToUpdate(e){return tB.resolve(null)}updateCollectionGroup(e,t,r){return tB.resolve()}updateIndexEntries(e,t){return tB.resolve()}}class tW{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new tc(q.comparator),n=!i.has(r);return this.index[t]=i.add(r),n}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tc(q.comparator)).toArray()}}new Uint8Array(0);class tY{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new tY(e,tY.DEFAULT_COLLECTION_PERCENTILE,tY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ tY.DEFAULT_COLLECTION_PERCENTILE=10,tY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tY.DEFAULT=new tY(41943040,tY.DEFAULT_COLLECTION_PERCENTILE,tY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tY.DISABLED=new tY(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tX{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new tX(0)}static gn(){return new tX(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tZ(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tJ{constructor(){this.changes=new to(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eg.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?tB.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t0{constructor(e,t,r){this.ls=e,this.Fs=t,this.indexManager=r}Bs(e,t){return this.Fs.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.Ls(e,t,r))}Ls(e,t,r){return this.ls.getEntry(e,t).next(e=>{for(let t of r)t.applyToLocalView(e);return e})}qs(e,t){e.forEach((e,r)=>{for(let i of t)i.applyToLocalView(r)})}Us(e,t){return this.ls.getEntries(e,t).next(t=>this.Ks(e,t).next(()=>t))}Ks(e,t){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.qs(t,e))}Gs(e,t,r){var i,n;return ee.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.Qs(e,t.path):null!==t.collectionGroup?this.js(e,t,r):this.Ws(e,t,r)}Qs(e,t){return this.Bs(e,new ee(t)).next(e=>{let t=tm;return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}js(e,t,r){let i=t.collectionGroup,n=tm;return this.indexManager.getCollectionParents(e,i).next(s=>tB.forEach(s,s=>{var a,o;let l=(o=s.child(i),new ex(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.Ws(e,l,r).next(e=>{e.forEach((e,t)=>{n=n.insert(e,t)})})}).next(()=>n))}Ws(e,t,r){let i;return this.ls.getAll(e,t.path,r).next(r=>(i=r,this.Fs.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(let t of e)for(let r of t.mutations){let n=r.key,s=i.get(n);null==s&&(s=eg.newInvalidDocument(n),i=i.insert(n,s)),e9(r,s,t.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}}).next(()=>(i.forEach((e,r)=>{e$(t,r)||(i=i.remove(e))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t1{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.zs=r,this.Hs=i}static Js(e,t){let r=ty(),i=ty();for(let n of t.docChanges)switch(n.type){case 0:r=r.add(n.doc.key);break;case 1:i=i.add(n.doc.key)}return new t1(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t2{Ys(e){this.Xs=e}Gs(e,t,r,i){var n;return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())||r.isEqual(O.min())?this.Zs(e,t):this.Xs.Us(e,i).next(n=>{let s=this.ti(t,n);return(eM(t)||eU(t))&&this.ei(t.limitType,s,i,r)?this.Zs(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ez(t)),this.Xs.Gs(e,t,r).next(e=>(s.forEach(t=>{e=e.insert(t.key,t)}),e)))})}ti(e,t){let r=new tc(eG(e));return t.forEach((t,i)=>{e$(e,i)&&(r=r.add(i))}),r}ei(e,t,r,i){if(r.size!==t.size)return!0;let n="F"===e?t.last():t.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(i)>0)}Zs(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",ez(t)),this.Xs.Gs(e,t,O.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t4{constructor(e,t,r,i){this.persistence=e,this.ni=t,this.M=i,this.si=new tl(V),this.ii=new to(e=>ev(e),ew),this.ri=O.min(),this.oi=e.getRemoteDocumentCache(),this.hs=e.getTargetCache(),this.fs=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Fs=this.persistence.getMutationQueue(e,this.indexManager),this.ui=new t0(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.si))}}async function t3(e,t){var r;return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.Fs.getAllMutationBatches(r).next(n=>(i=n,e.ai(t),e.Fs.getAllMutationBatches(r))).next(t=>{let n=[],s=[],a=ty();for(let o of i)for(let l of(n.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(s.push(u.batchId),u.mutations))a=a.add(h.key);return e.ui.Us(r,a).next(e=>({ci:e,removedBatchIds:n,addedBatchIds:s}))})})}function t6(e){var t;return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hs.getLastRemoteSnapshotVersion(t))}async function t5(e,t,r){var i;let n=e,s=n.si.get(t);try{r||await n.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",e=>n.persistence.referenceDelegate.removeTarget(e,s))}catch(a){if(!tK(a))throw a;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.si=n.si.remove(t),n.ii.delete(s.target)}function t9(e,t,r){var i;let n=O.min(),s=ty();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,r){var i;let n=e.ii.get(r);return void 0!==n?tB.resolve(e.si.get(n)):e.hs.getTargetData(t,r)})(e,i,eq(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.hs.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.ni.Gs(i,t,r?n:O.min(),r?s:ty())).next(e=>({documents:e,hi:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t8{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,t){return tB.resolve(this._i.get(t))}saveBundleMetadata(e,t){return this._i.set(t.id,{id:t.id,version:t.version,createTime:tL(t.createTime)}),tB.resolve()}getNamedQuery(e,t){return tB.resolve(this.wi.get(t))}saveNamedQuery(e,t){var r;return this.wi.set(t.name,{name:t.name,query:function(e){var t,r;let i=function(e){var t,r,i,n,s,a,o,l,u;let h=function(e){let t=tR(e);return 4===t.length?q.emptyPath():tO(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){(t=1===d)||w();let m=c.from[0];m.allDescendants?f=m.collectionId:h=h.child(m.collectionId)}let g=[];c.where&&(g=function e(t){var r;return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tU(e.unaryFilter.field);return eT.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=tU(e.unaryFilter.field);return eT.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=tU(e.unaryFilter.field);return eT.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let n=tU(e.unaryFilter.field);return eT.create(n,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t)]:void 0!==t.fieldFilter?[(r=t,eT.create(tU(r.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(r.fieldFilter.op),r.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):w():[]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>{var t;return new eL(tU(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}));let y=null,v;c.limit&&(y=Z(v="object"==typeof(r=c.limit)?r.value:r)?null:v);let E=null;c.startAt&&(E=function(e){let t=!!e.before,r=e.values||[];return new eD(r,t)}(c.startAt));let T=null;return c.endAt&&(T=function(e){let t=!e.before,r=e.values||[];return new eD(r,t)}(c.endAt)),i=h,n=f,s=p,a=g,o=y,l=E,u=T,new ex(i,n,s,a,o,"F",l,u)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?(r=i.limit,new ex(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),r,"L",i.startAt,i.endAt)):i}(t.bundledQuery),readTime:tL(t.readTime)}),tB.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t7{constructor(){this.overlays=new tl(ee.comparator),this.mi=new Map}getOverlay(e,t){return tB.resolve(this.overlays.get(t))}saveOverlays(e,t,r){return r.forEach((r,i)=>{this.Xt(e,t,i)}),tB.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.mi.get(r);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.mi.delete(r)),tB.resolve()}getOverlaysForCollection(e,t,r){let i=tg(),n=t.length+1,s=new ee(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===n&&o.largestBatchId>r&&i.set(o.getKey(),o)}return tB.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let n=new tl((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let a=s.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>r){let o=n.get(a.largestBatchId);null===o&&(o=tg(),n=n.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=tg(),u=n.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=i)););return tB.resolve(l)}Xt(e,t,r){if(null===r)return;let i=this.overlays.get(r.key);if(null!==i){let n=this.mi.get(i.largestBatchId).delete(r.key);this.mi.set(i.largestBatchId,n)}this.overlays=this.overlays.insert(r.key,new t$(t,r));let s=this.mi.get(t);void 0===s&&(s=ty(),this.mi.set(t,s)),this.mi.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class re{constructor(){this.gi=new tc(rt.yi),this.pi=new tc(rt.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,t){let r=new rt(e,t);this.gi=this.gi.add(r),this.pi=this.pi.add(r)}Ti(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ei(new rt(e,t))}Ai(e,t){e.forEach(e=>this.removeReference(e,t))}Ri(e){let t=new ee(new q([])),r=new rt(t,e),i=new rt(t,e+1),n=[];return this.pi.forEachInRange([r,i],e=>{this.Ei(e),n.push(e.key)}),n}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){let t=new ee(new q([])),r=new rt(t,e),i=new rt(t,e+1),n=ty();return this.pi.forEachInRange([r,i],e=>{n=n.add(e.key)}),n}containsKey(e){let t=new rt(e,0),r=this.gi.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rt{constructor(e,t){this.key=e,this.Vi=t}static yi(e,t){return ee.comparator(e.key,t.key)||V(e.Vi,t.Vi)}static Ii(e,t){return V(e.Vi,t.Vi)||ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rr{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Fs=[],this.vi=1,this.Si=new tc(rt.yi)}checkEmpty(e){return tB.resolve(0===this.Fs.length)}addMutationBatch(e,t,r,i){let n=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];let s=new tz(n,t,r,i);for(let a of(this.Fs.push(s),i))this.Si=this.Si.add(new rt(a.key,n)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return tB.resolve(s)}lookupMutationBatch(e,t){return tB.resolve(this.Di(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Ci(t+1),i=r<0?0:r;return tB.resolve(this.Fs.length>i?this.Fs[i]:null)}getHighestUnacknowledgedBatchId(){return tB.resolve(0===this.Fs.length?-1:this.vi-1)}getAllMutationBatches(e){return tB.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rt(t,0),i=new rt(t,Number.POSITIVE_INFINITY),n=[];return this.Si.forEachInRange([r,i],e=>{let t=this.Di(e.Vi);n.push(t)}),tB.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tc(V);return t.forEach(e=>{let t=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY);this.Si.forEachInRange([t,i],e=>{r=r.add(e.Vi)})}),tB.resolve(this.xi(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,n=r;ee.isDocumentKey(n)||(n=n.child(""));let s=new rt(new ee(n),0),a=new tc(V);return this.Si.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===i&&(a=a.add(e.Vi)),!0)},s),tB.resolve(this.xi(a))}xi(e){let t=[];return e.forEach(e=>{let r=this.Di(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){var r;0===this.Ni(t.batchId,"removed")||w(),this.Fs.shift();let i=this.Si;return tB.forEach(t.mutations,r=>{let n=new rt(r.key,t.batchId);return i=i.delete(n),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Si=i})}dn(e){}containsKey(e,t){let r=new rt(t,0),i=this.Si.firstAfterOrEqual(r);return tB.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Fs.length,tB.resolve()}Ni(e,t){return this.Ci(e)}Ci(e){return 0===this.Fs.length?0:e-this.Fs[0].batchId}Di(e){let t=this.Ci(e);return t<0||t>=this.Fs.length?null:this.Fs[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ri{constructor(e){this.ki=e,this.docs=new tl(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),n=i?i.size:0,s=this.ki(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-n,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return tB.resolve(r?r.document.mutableCopy():eg.newInvalidDocument(t))}getEntries(e,t){let r=tf;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eg.newInvalidDocument(e))}),tB.resolve(r)}getAll(e,t,r){let i=tf,n=new ee(t.child("")),s=this.docs.getIteratorFrom(n);for(;s.hasNext();){let{key:a,value:{document:o}}=s.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=o.readTime.compareTo(r)||(i=i.insert(o.key,o.mutableCopy()))}return tB.resolve(i)}Mi(e,t){return tB.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rn(this)}getSize(e){return tB.resolve(this.size)}}class rn extends tJ{constructor(e){super(),this.Un=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Un.addEntry(e,i)):this.Un.removeEntry(r)}),tB.waitFor(t)}getFromCache(e,t){return this.Un.getEntry(e,t)}getAllFromCache(e,t){return this.Un.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rs{constructor(e){this.persistence=e,this.Oi=new to(e=>ev(e),ew),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.$i=0,this.Fi=new re,this.targetCount=0,this.Bi=tX.mn()}forEachTarget(e,t){return this.Oi.forEach((e,r)=>t(r)),tB.resolve()}getLastRemoteSnapshotVersion(e){return tB.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return tB.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),tB.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$i&&(this.$i=t),tB.resolve()}In(e){this.Oi.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Bi=new tX(t),this.highestTargetId=t),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,t){return this.In(t),this.targetCount+=1,tB.resolve()}updateTargetData(e,t){return this.In(t),tB.resolve()}removeTargetData(e,t){return this.Oi.delete(t.target),this.Fi.Ri(t.targetId),this.targetCount-=1,tB.resolve()}removeTargets(e,t,r){let i=0,n=[];return this.Oi.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Oi.delete(s),n.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),tB.waitFor(n).next(()=>i)}getTargetCount(e){return tB.resolve(this.targetCount)}getTargetData(e,t){let r=this.Oi.get(t)||null;return tB.resolve(r)}addMatchingKeys(e,t,r){return this.Fi.Ti(t,r),tB.resolve()}removeMatchingKeys(e,t,r){this.Fi.Ai(t,r);let i=this.persistence.referenceDelegate,n=[];return i&&t.forEach(t=>{n.push(i.markPotentiallyOrphaned(e,t))}),tB.waitFor(n)}removeMatchingKeysForTargetId(e,t){return this.Fi.Ri(t),tB.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Fi.Pi(t);return tB.resolve(r)}containsKey(e,t){return tB.resolve(this.Fi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ra{constructor(e,t){var r;this.Li={},this.overlays={},this.Zn=new D(0),this.ts=!1,this.ts=!0,this.referenceDelegate=e(this),this.hs=new rs(this),this.indexManager=new tH,this.ls=(r=e=>this.referenceDelegate.qi(e),new ri(r)),this.M=new tj(t),this.fs=new t8(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new t7,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Li[e.toKey()];return r||(r=new rr(t,this.referenceDelegate),this.Li[e.toKey()]=r),r}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let i=new ro(this.Zn.next());return this.referenceDelegate.Ui(),r(i).next(e=>this.referenceDelegate.Ki(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Gi(e,t){return tB.or(Object.values(this.Li).map(r=>()=>r.containsKey(e,t)))}}class ro extends tq{constructor(e){super(),this.currentSequenceNumber=e}}class rl{constructor(e){this.persistence=e,this.Qi=new re,this.ji=null}static Wi(e){return new rl(e)}get zi(){if(this.ji)return this.ji;throw w()}addReference(e,t,r){return this.Qi.addReference(r,t),this.zi.delete(r.toString()),tB.resolve()}removeReference(e,t,r){return this.Qi.removeReference(r,t),this.zi.add(r.toString()),tB.resolve()}markPotentiallyOrphaned(e,t){return this.zi.add(t.toString()),tB.resolve()}removeTarget(e,t){this.Qi.Ri(t.targetId).forEach(e=>this.zi.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.zi.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ui(){this.ji=new Set}Ki(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tB.forEach(this.zi,r=>{let i=ee.fromPath(r);return this.Hi(e,i).next(e=>{e||t.removeEntry(i,O.min())})}).next(()=>(this.ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hi(e,t).next(e=>{e?this.zi.delete(t.toString()):this.zi.add(t.toString())})}qi(e){return 0}Hi(e,t){return tB.or([()=>tB.resolve(this.Qi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gi(e,t)])}}class ru{constructor(){this.activeTargetIds=tv}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rh{constructor(){this.Or=new ru,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Or.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,r){this.$r[e]=t}removeLocalQueryTarget(e){this.Or.Zi(e)}isLocalQueryTarget(e){return this.Or.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(e){return this.Or.activeTargetIds.has(e)}start(){return this.Or=new ru,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rc{Fr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rd{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Kr))e(0)}Ur(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Kr))e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rm{constructor(e){this.Qr=e.Qr,this.jr=e.jr}Wr(e){this.zr=e}Hr(e){this.Jr=e}onMessage(e){this.Yr=e}close(){this.jr()}send(e){this.Qr(e)}Xr(){this.zr()}Zr(e){this.Jr(e)}eo(e){this.Yr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.no=t+"://"+e.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(e,t,r,i,n){let s=this.ro(e,t);g("RestConnection","Sending: ",s,r);let a={};return this.oo(a,i,n),this.ao(e,s,a,r).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",r),t})}uo(e,t,r,i,n){return this.io(e,t,r,i,n)}oo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}ro(e,t){let r=rf[e];return`${this.no}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,t,r,i){return new Promise((n,s)=>{let a=new u.JJ;a.listenOnce(u.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let t=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),n(t);break;case u.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),s(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',r,"response text:",a.getResponseText()),r>0){let i=a.getResponseJson().error;if(i&&i.status&&i.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(i.status);s(new T(o,i.message))}else s(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(i);a.send(t,"POST",o,r,15)})}co(e,t,r){let n=[this.no,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=(0,u.UE)(),a=(0,u.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.zI({})),this.oo(o.initMessageHeaders,t,r),(0,l.uI)()||(0,l.b$)()||(0,l.d)()||(0,l.w1)()||(0,l.Mn)()||(0,l.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");let h=n.join("");g("Connection","Creating WebChannel: "+h,o);let c=s.createWebChannel(h,o),d=!1,f=!1,m=new rm({Qr(e){f?g("Connection","Not sending because WebChannel is closed:",e):(d||(g("Connection","Opening WebChannel transport."),c.open(),d=!0),g("Connection","WebChannel sending:",e),c.send(e))},jr:()=>c.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(t){setTimeout(()=>{throw t},0)}})};return p(c,u.ii.EventType.OPEN,()=>{f||g("Connection","WebChannel transport opened.")}),p(c,u.ii.EventType.CLOSE,()=>{f||(f=!0,g("Connection","WebChannel transport closed"),m.Zr())}),p(c,u.ii.EventType.ERROR,e=>{f||(f=!0,y("Connection","WebChannel transport errored:",e),m.Zr(new T(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,u.ii.EventType.MESSAGE,e=>{var t,r;if(!f){let n=e.data[0];(r=!!n)||w();let s=n.error||(null===(t=n[0])||void 0===t?void 0:t.error);if(s){g("Connection","WebChannel received error:",s);let a=s.status,o=function(e){let t=i[e];if(void 0!==t)return ta(t)}(a),l=s.message;void 0===o&&(o=E.INTERNAL,l="Unknown error status: "+a+" with message "+s.message),f=!0,m.Zr(new T(o,l)),c.close()}else g("Connection","WebChannel received:",n),m.eo(n)}}),p(a,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Xr()},0),m}}function rp(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ry(e){return new tD(e,!0)}class rv{constructor(e,t,r=1e3,i=1.5,n=6e4){this.Hn=e,this.timerId=t,this.ho=r,this.lo=i,this.fo=n,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(e){this.cancel();let t=Math.floor(this._o+this.Io()),r=Math.max(0,Date.now()-this.mo),i=Math.max(0,t-r);i>0&&g("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this._o} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,i,()=>(this.mo=Date.now(),e())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){null!==this.wo&&(this.wo.skipDelay(),this.wo=null)}cancel(){null!==this.wo&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rw{constructor(e,t,r,i,n,s,a,o){this.Hn=e,this.Eo=r,this.Ao=i,this.Ro=n,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new rv(e,t)}So(){return 1===this.state||5===this.state||this.Do()}Do(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&null===this.Po&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(e){this.Oo(),this.stream.send(e)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,4!==e?this.vo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Fo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Hr(t)}Fo(){}auth(){this.state=1;let e=this.Bo(this.bo),t=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.bo===t&&this.Lo(e,r)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)})})}Lo(e,t){let r=this.Bo(this.bo);this.stream=this.Uo(e,t),this.stream.Wr(()=>{r(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(e=>{r(()=>this.qo(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Bo(e){return t=>{this.Hn.enqueueAndForget(()=>this.bo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rE extends rw{constructor(e,t,r,i,n,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,s),this.M=n}Uo(e,t){return this.Ro.co("Listen",e,t)}onMessage(e){this.vo.reset();let t=function(e,t){let r;if("targetChange"in t){var i,n,s,a;t.targetChange;let o="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:w(),l=t.targetChange.targetIds||[],u=(s=t.targetChange.resumeToken,e.N?(void 0===s||"string"==typeof s||w(),z.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||w(),z.fromUint8Array(s||new Uint8Array))),h=t.targetChange.cause,c=h&&function(e){let t=void 0===e.code?E.UNKNOWN:ta(e.code);return new T(t,e.message||"")}(h);r=new tS(o,l,u,c||null)}else if("documentChange"in t){t.documentChange;let d=t.documentChange;d.document,d.document.name,d.document.updateTime;let f=tV(e,d.document.name),m=tL(d.document.updateTime),g=new em({mapValue:{fields:d.document.fields}}),p=eg.newFoundDocument(f,m,g),y=d.targetIds||[],v=d.removedTargetIds||[];r=new tT(y,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;let I=t.documentDelete;I.document;let S=tV(e,I.document),C=I.readTime?tL(I.readTime):O.min(),A=eg.newNoDocument(S,C),N=I.removedTargetIds||[];r=new tT([],N,A.key,A)}else if("documentRemove"in t){t.documentRemove;let k=t.documentRemove;k.document;let _=tV(e,k.document),b=k.removedTargetIds||[];r=new tT([],b,_,null)}else{if(!("filter"in t))return w();{t.filter;let D=t.filter;D.targetId;let L=D.count||0,R=new ts(L),V=D.targetId;r=new tI(V,R)}}return r}(this.M,e),r=function(e){if(!("targetChange"in e))return O.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?O.min():t.readTime?tL(t.readTime):O.min()}(e);return this.listener.Ko(t,r)}Go(e){let t={};t.database=tx(this.M),t.addTarget=function(e,t){var r,i,n,s,a,o;let l,u=t.target;return(l=eE(u)?{documents:{documents:[tF(e,u.path)]}}:{query:function(e,t){var r,i,n,s;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(a.parent=tF(e,o),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=tF(e,o.popLast()),a.structuredQuery.from=[{collectionId:o.lastSegment()}]);let l=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){var t;if("=="===e.op){if(eh(e.value))return{unaryFilter:{field:tM(e.field),op:"IS_NAN"}};if(eu(e.value))return{unaryFilter:{field:tM(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eh(e.value))return{unaryFilter:{field:tM(e.field),op:"IS_NOT_NAN"}};if(eu(e.value))return{unaryFilter:{field:tM(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tM(e.field),op:(t=e.op,tb[t]),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>{var t,r;return{field:tM(e.field),direction:(r=e.dir,t_[r])}})}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(n=t.limit,e.N||Z(n)?n:{value:n});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(a.structuredQuery.endAt={before:!(s=t.endAt).inclusive,values:s.position}),a}(e,u)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?l.resumeToken=(s=t.resumeToken,e.N?s.toBase64():s.toUint8Array()):t.snapshotVersion.compareTo(O.min())>0&&(l.readTime=(o=t.snapshotVersion.toTimestamp(),e.N?`${new Date(1e3*o.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+o.nanoseconds).slice(-9)}Z`:{seconds:""+o.seconds,nanos:o.nanoseconds})),l}(this.M,e);let r=function(e,t){let r=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.M,e);r&&(t.labels=r),this.Mo(t)}Qo(e){let t={};t.database=tx(this.M),t.removeTarget=e,this.Mo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Ro=r,this.M=i,this.Xo=!1}Zo(){if(this.Xo)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}io(e,t,r){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,n])=>this.Ro.io(e,t,r,i,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}uo(e,t,r){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,n])=>this.Ro.uo(e,t,r,i,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.Xo=!0}}class rI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){0===this.ta&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(e){"Online"===this.state?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ia("Offline")))}set(e){this.aa(),this.ta=0,"Online"===e&&(this.na=!1),this.ia(e)}ia(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(p(t),this.na=!1):g("OnlineStateTracker",t)}aa(){null!==this.ea&&(this.ea.cancel(),this.ea=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rS{constructor(e,t,r,i,n){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=n,this.fa.Fr(e=>{r.enqueueAndForget(async()=>{rR(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){var t;e.ha.add(4),await rA(e),e.da.set("Unknown"),e.ha.delete(4),await rC(e)}(this))})}),this.da=new rI(r,i)}}async function rC(e){if(rR(e))for(let t of e.la)await t(!0)}async function rA(e){for(let t of e.la)await t(!1)}function rN(e,t){var r;e.ca.has(t.targetId)||(e.ca.set(t.targetId,t),rL(e)?rD(e):rq(e).Do()&&r_(e,t))}function rk(e,t){var r;let i=rq(e);e.ca.delete(t),i.Do()&&rb(e,t),0===e.ca.size&&(i.Do()?i.No():rR(e)&&e.da.set("Unknown"))}function r_(e,t){e._a.Z(t.targetId),rq(e).Go(t)}function rb(e,t){e._a.Z(t),rq(e).Qo(t)}function rD(e){e._a=new tA({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.ca.get(t)||null}),rq(e).start(),e.da.sa()}function rL(e){return rR(e)&&!rq(e).So()&&e.ca.size>0}function rR(e){var t;return 0===e.ha.size}function rV(e){e._a=void 0}async function rF(e){e.ca.forEach((t,r)=>{r_(e,t)})}async function rx(e,t){rV(e),rL(e)?(e.da.oa(t),rD(e)):e.da.set("Unknown")}async function rO(e,t,r){if(e.da.set("Online"),t instanceof tS&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let i of t.targetIds)e.ca.has(i)&&(await e.remoteSyncer.rejectListen(i,r),e.ca.delete(i),e._a.removeTarget(i))}(e,t)}catch(i){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await rM(e,i)}else if(t instanceof tT?e._a.at(t):t instanceof tI?e._a._t(t):e._a.ht(t),!r.isEqual(O.min()))try{let n=await t6(e.localStore);r.compareTo(n)>=0&&await function(e,t){let r=e._a.yt(t);return r.targetChanges.forEach((r,i)=>{if(r.resumeToken.approximateByteSize()>0){let n=e.ca.get(i);n&&e.ca.set(i,n.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach(t=>{let r=e.ca.get(t);if(!r)return;e.ca.set(t,r.withResumeToken(z.EMPTY_BYTE_STRING,r.snapshotVersion)),rb(e,t);let i=new tG(r.target,t,1,r.sequenceNumber);r_(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(s){g("RemoteStore","Failed to raise snapshot:",s),await rM(e,s)}}async function rM(e,t,r){if(!tK(t))throw t;e.ha.add(1),await rA(e),e.da.set("Offline"),r||(r=()=>t6(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e.ha.delete(1),await rC(e)})}async function rU(e,t){var r;e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let i=rR(e);e.ha.add(3),await rA(e),i&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.ha.delete(3),await rC(e)}async function rP(e,t){var r;t?(e.ha.delete(2),await rC(e)):t||(e.ha.add(2),await rA(e),e.da.set("Unknown"))}function rq(e){return e.wa||(e.wa=function(e,t,r){var i;return e.Zo(),new rE(t,e.Ro,e.authCredentials,e.appCheckCredentials,e.M,r)}(e.datastore,e.asyncQueue,{Wr:rF.bind(null,e),Hr:rx.bind(null,e),Ko:rO.bind(null,e)}),e.la.push(async t=>{t?(e.wa.xo(),rL(e)?rD(e):e.da.set("Unknown")):(await e.wa.stop(),rV(e))})),e.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rB{constructor(e,t,r,i,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=n,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,i,n){let s=Date.now()+r,a=new rB(e,t,s,i,n);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rK(e,t){if(p("AsyncQueue",`${t}: ${e}`),tK(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rz{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=tm,this.sortedSet=new tl(this.comparator)}static emptySet(e){return new rz(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rz)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,n=r.getNext().key;if(!i.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new rz;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r${constructor(){this.ga=new tl(ee.comparator)}track(e){let t=e.doc.key,r=this.ga.get(t);r?0!==e.type&&3===r.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==r.type?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.ga=this.ga.remove(t):1===e.type&&2===r.type?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):w():this.ga=this.ga.insert(t,e)}ya(){let e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class rG{constructor(e,t,r,i,n,s,a,o){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=n,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o}static fromInitialDocuments(e,t,r,i){let n=[];return t.forEach(e=>{n.push({type:0,doc:e})}),new rG(e,t,rz.emptySet(t),n,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eB(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rj{constructor(){this.pa=void 0,this.listeners=[]}}class rQ{constructor(){this.queries=new to(e=>eK(e),eB),this.onlineState="Unknown",this.Ia=new Set}}async function rH(e,t){var r;let i=t.query,n=!1,s=e.queries.get(i);if(s||(n=!0,s=new rj),n)try{s.pa=await e.onListen(i)}catch(o){let a=rK(o,`Initialization of query '${ez(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,s),s.listeners.push(t),t.Ta(e.onlineState),s.pa&&t.Ea(s.pa)&&rZ(e)}async function rW(e,t){var r;let i=t.query,n=!1,s=e.queries.get(i);if(s){let a=s.listeners.indexOf(t);a>=0&&(s.listeners.splice(a,1),n=0===s.listeners.length)}if(n)return e.queries.delete(i),e.onUnlisten(i)}function rY(e,t){var r;let i=!1;for(let n of t){let s=n.query,a=e.queries.get(s);if(a){for(let o of a.listeners)o.Ea(n)&&(i=!0);a.pa=n}}i&&rZ(e)}function rX(e,t,r){var i;let n=e.queries.get(t);if(n)for(let s of n.listeners)s.onError(r);e.queries.delete(t)}function rZ(e){e.Ia.forEach(e=>{e.next()})}class rJ{constructor(e,t,r){this.query=e,this.Aa=t,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=r||{}}Ea(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new rG(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let i=!1;return this.Ra?this.Pa(e)&&(this.Aa.next(e),i=!0):this.Va(e,this.onlineState)&&(this.va(e),i=!0),this.ba=e,i}onError(e){this.Aa.error(e)}Ta(e){this.onlineState=e;let t=!1;return this.ba&&!this.Ra&&this.Va(this.ba,e)&&(this.va(this.ba),t=!0),t}Va(e,t){return!e.fromCache||(!this.options.Sa||!("Offline"!==t))&&(!e.docs.isEmpty()||"Offline"===t)}Pa(e){if(e.docChanges.length>0)return!0;let t=this.ba&&this.ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}va(e){e=rG.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Ra=!0,this.Aa.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r0{constructor(e){this.key=e}}class r1{constructor(e){this.key=e}}class r2{constructor(e,t){this.query=e,this.ka=t,this.Ma=null,this.current=!1,this.Oa=ty(),this.mutatedKeys=ty(),this.$a=eG(e),this.Fa=new rz(this.$a)}get Ba(){return this.ka}La(e,t){let r=t?t.qa:new r$,i=t?t.Fa:this.Fa,n=t?t.mutatedKeys:this.mutatedKeys,s=i,a=!1,o=eM(this.query)&&i.size===this.query.limit?i.last():null,l=eU(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{let u=i.get(e),h=e$(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.Ua(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.$a(h,o)>0||l&&0>this.$a(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),n=d?n.add(e):n.delete(e)):(s=s.delete(e),n=n.delete(e)))}),eM(this.query)||eU(this.query))for(;s.size>this.query.limit;){let u=eM(this.query)?s.last():s.first();s=s.delete(u.key),n=n.delete(u.key),r.track({type:1,doc:u})}return{Fa:s,qa:r,ei:a,mutatedKeys:n}}Ua(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let i=this.Fa;this.Fa=e.Fa,this.mutatedKeys=e.mutatedKeys;let n=e.qa.ya();n.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return r(e)-r(t)})(e.type,t.type)||this.$a(e.doc,t.doc)),this.Ka(r);let s=t?this.Ga():[],a=0===this.Oa.size&&this.current?1:0,o=a!==this.Ma;return(this.Ma=a,0!==n.length||o)?{snapshot:new rG(this.query,e.Fa,i,n,e.mutatedKeys,0===a,o,!1),Qa:s}:{Qa:s}}Ta(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new r$,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(e){return!this.ka.has(e)&&!!this.Fa.has(e)&&!this.Fa.get(e).hasLocalMutations}Ka(e){e&&(e.addedDocuments.forEach(e=>this.ka=this.ka.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ka=this.ka.delete(e)),this.current=e.current)}Ga(){if(!this.current)return[];let e=this.Oa;this.Oa=ty(),this.Fa.forEach(e=>{this.ja(e.key)&&(this.Oa=this.Oa.add(e.key))});let t=[];return e.forEach(e=>{this.Oa.has(e)||t.push(new r1(e))}),this.Oa.forEach(r=>{e.has(r)||t.push(new r0(r))}),t}Wa(e){this.ka=e.hi,this.Oa=ty();let t=this.La(e.documents);return this.applyChanges(t,!0)}za(){return rG.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,0===this.Ma)}}class r4{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class r3{constructor(e){this.key=e,this.Ha=!1}}class r6{constructor(e,t,r,i,n,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=n,this.maxConcurrentLimboResolutions=s,this.Ja={},this.Ya=new to(e=>eK(e),eB),this.Xa=new Map,this.Za=new Set,this.tu=new tl(ee.comparator),this.eu=new Map,this.nu=new re,this.su={},this.iu=new Map,this.ru=tX.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return!0===this.ou}}async function r5(e,t){let r=function(e){var t;let r=e;return r.remoteStore.remoteSyncer.applyRemoteEvent=r7.bind(null,r),r.remoteStore.remoteSyncer.getRemoteKeysForTarget=ih.bind(null,r),r.remoteStore.remoteSyncer.rejectListen=it.bind(null,r),r.Ja.Ko=rY.bind(null,r.eventManager),r.Ja.uu=rX.bind(null,r.eventManager),r}(e),i,n,s=r.Ya.get(t);if(s)i=s.targetId,r.sharedClientState.addLocalQueryTarget(i),n=s.view.za();else{let a=await function(e,t){var r;let i=e;return i.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return i.hs.getTargetData(e,t).next(n=>n?(r=n,tB.resolve(r)):i.hs.allocateTargetId(e).next(n=>(r=new tG(t,n,0,e.currentSequenceNumber),i.hs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=i.si.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(i.si=i.si.insert(e.targetId,e),i.ii.set(t,e.targetId)),e})}(r.localStore,eq(t));r.isPrimaryClient&&rN(r.remoteStore,a);let o=r.sharedClientState.addLocalQueryTarget(a.targetId);n=await r9(r,t,i=a.targetId,"current"===o)}return n}async function r9(e,t,r,i){e.au=(t,r,i)=>(async function(e,t,r,i){let n=t.view.La(r);n.ei&&(n=await t9(e.localStore,t.query,!1).then(({documents:e})=>t.view.La(e,n)));let s=i&&i.targetChanges.get(t.targetId),a=t.view.applyChanges(n,e.isPrimaryClient,s);return is(e,t.targetId,a.Qa),a.snapshot})(e,t,r,i);let n=await t9(e.localStore,t,!0),s=new r2(t,n.hi),a=s.La(n.documents),o=tE.createSynthesizedTargetChangeForCurrentChange(r,i&&"Offline"!==e.onlineState),l=s.applyChanges(a,e.isPrimaryClient,o);is(e,r,l.Qa);let u=new r4(t,r,s);return e.Ya.set(t,u),e.Xa.has(r)?e.Xa.get(r).push(t):e.Xa.set(r,[t]),l.snapshot}async function r8(e,t){var r;let i=e.Ya.get(t),n=e.Xa.get(i.targetId);if(n.length>1)return e.Xa.set(i.targetId,n.filter(e=>!eB(e,t))),void e.Ya.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(i.targetId),e.sharedClientState.isActiveQueryTarget(i.targetId)||await t5(e.localStore,i.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(i.targetId),rk(e.remoteStore,i.targetId),ir(e,i.targetId)}).catch(tZ)):(ir(e,i.targetId),await t5(e.localStore,i.targetId,!0))}async function r7(e,t){var r;try{let i=await function(e,t){var r;let i=e,n=t.snapshotVersion,s=i.si;return i.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var r,a,o;let l=i.oi.newChangeBuffer({trackRemovals:!0});s=i.si;let u=[];t.targetChanges.forEach((r,a)=>{var o,l,h;let c=s.get(a);if(!c)return;u.push(i.hs.removeMatchingKeys(e,r.removedDocuments,a).next(()=>i.hs.addMatchingKeys(e,r.addedDocuments,a)));let d=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?d=d.withResumeToken(z.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):r.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(r.resumeToken,n)),s=s.insert(a,d),l=d,(0===c.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size>0)&&u.push(i.hs.updateTargetData(e,d))});let h=tf,c;if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(i.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((r=e,a=l,o=t.documentUpdates,c=ty(),o.forEach(e=>c=c.add(e)),a.getEntries(r,c).next(e=>{let t=tf;return o.forEach((r,i)=>{let n=e.get(r);i.isNoDocument()&&i.version.isEqual(O.min())?(a.removeEntry(r,i.readTime),t=t.insert(r,i)):!n.isValidDocument()||i.version.compareTo(n.version)>0||0===i.version.compareTo(n.version)&&n.hasPendingWrites?(a.addEntry(i),t=t.insert(r,i)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",n.version," Watch version:",i.version)}),t})).next(e=>{h=e})),!n.isEqual(O.min())){let d=i.hs.getLastRemoteSnapshotVersion(e).next(t=>i.hs.setTargetsMetadata(e,e.currentSequenceNumber,n));u.push(d)}return tB.waitFor(u).next(()=>l.apply(e)).next(()=>i.ui.Ks(e,h)).next(()=>h)}).then(e=>(i.si=s,e))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{var i,n,s;let a=e.eu.get(r);a&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?a.Ha=!0:t.modifiedDocuments.size>0?(n=a.Ha)||w():t.removedDocuments.size>0&&(a.Ha||w(),a.Ha=!1))}),await il(e,i,t)}catch(n){await tZ(n)}}function ie(e,t,r){var i;let n=e;if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){let s=[];n.Ya.forEach((e,r)=>{let i=r.view.Ta(t);i.snapshot&&s.push(i.snapshot)}),function(e,t){var r;let i=e;i.onlineState=t;let n=!1;i.queries.forEach((e,r)=>{for(let i of r.listeners)i.Ta(t)&&(n=!0)}),n&&rZ(i)}(n.eventManager,t),s.length&&n.Ja.Ko(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function it(e,t,r){var i;let n=e;n.sharedClientState.updateQueryState(t,"rejected",r);let s=n.eu.get(t),a=s&&s.key;if(a){let o=new tl(ee.comparator);o=o.insert(a,eg.newNoDocument(a,O.min()));let l=ty().add(a),u=new tw(O.min(),new Map,new tc(V),o,l);await r7(n,u),n.tu=n.tu.remove(a),n.eu.delete(t),io(n)}else await t5(n.localStore,t,!1).then(()=>ir(n,t,r)).catch(tZ)}function ir(e,t,r=null){for(let i of(e.sharedClientState.removeLocalQueryTarget(t),e.Xa.get(t)))e.Ya.delete(i),r&&e.Ja.uu(i,r);e.Xa.delete(t),e.isPrimaryClient&&e.nu.Ri(t).forEach(t=>{e.nu.containsKey(t)||ii(e,t)})}function ii(e,t){e.Za.delete(t.path.canonicalString());let r=e.tu.get(t);null!==r&&(rk(e.remoteStore,r),e.tu=e.tu.remove(t),e.eu.delete(r),io(e))}function is(e,t,r){for(let i of r)i instanceof r0?(e.nu.addReference(i.key,t),ia(e,i)):i instanceof r1?(g("SyncEngine","Document no longer in limbo: "+i.key),e.nu.removeReference(i.key,t),e.nu.containsKey(i.key)||ii(e,i.key)):w()}function ia(e,t){let r=t.key,i=r.path.canonicalString();e.tu.get(r)||e.Za.has(i)||(g("SyncEngine","New document in limbo: "+r),e.Za.add(i),io(e))}function io(e){for(;e.Za.size>0&&e.tu.size<e.maxConcurrentLimboResolutions;){let t=e.Za.values().next().value;e.Za.delete(t);let r=new ee(q.fromString(t)),i=e.ru.next();e.eu.set(i,new r3(r)),e.tu=e.tu.insert(r,i),rN(e.remoteStore,new tG(eq(eO(r.path)),i,2,D.A))}}async function il(e,t,r){var i;let n=[],s=[],a=[];e.Ya.isEmpty()||(e.Ya.forEach((i,o)=>{a.push(e.au(o,t,r).then(t=>{if(t){e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,t.fromCache?"not-current":"current"),n.push(t);let r=t1.Js(o.targetId,t);s.push(r)}}))}),await Promise.all(a),e.Ja.Ko(n),await async function(e,t){var r;let i=e;try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>tB.forEach(t,t=>tB.forEach(t.zs,r=>i.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>tB.forEach(t.Hs,r=>i.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(n){if(!tK(n))throw n;g("LocalStore","Failed to update sequence numbers: "+n)}for(let s of t){let a=s.targetId;if(!s.fromCache){let o=i.si.get(a),l=o.snapshotVersion,u=o.withLastLimboFreeSnapshotVersion(l);i.si=i.si.insert(a,u)}}}(e.localStore,s))}async function iu(e,t){var r,i,n;let s=e;if(!s.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let a=await t3(s.localStore,t);s.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",(i=s).iu.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,n))})}),i.iu.clear(),s.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await il(s,a.ci)}}function ih(e,t){var r;let i=e.eu.get(t);if(i&&i.Ha)return ty().add(i.key);{let n=ty(),s=e.Xa.get(t);if(!s)return n;for(let a of s){let o=e.Ya.get(a);n=n.unionWith(o.view.Ba)}return n}}class ic{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=ry(e.databaseInfo.databaseId),this.sharedClientState=this.hu(e),this.persistence=this.lu(e),await this.persistence.start(),this.gcScheduler=this.fu(e),this.localStore=this.du(e)}fu(e){return null}du(e){var t,r,i,n;return t=this.persistence,r=new t2,i=e.initialUser,n=this.M,new t4(t,r,i,n)}lu(e){return new ra(rl.Wi,this.M)}hu(e){return new rh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class id{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ie(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iu.bind(null,this.syncEngine),await rP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rQ}createDatastore(e){var t,r,i,n,s;let a=ry(e.databaseInfo.databaseId),o=(t=e.databaseInfo,new rg(t));return r=e.authCredentials,i=e.appCheckCredentials,new rT(r,i,o,a)}createRemoteStore(e){var t,r,i,n,s;return t=this.localStore,r=this.datastore,i=e.asyncQueue,n=e=>ie(this.syncEngine,e,0),s=rd.vt()?new rd:new rc,new rS(t,r,i,n,s)}createSyncEngine(e,t){return function(e,t,r,i,n,s,a){let o=new r6(e,t,r,i,n,s);return a&&(o.ou=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){var t;g("RemoteStore","RemoteStore shutting down."),e.ha.add(5),await rA(e),e.fa.shutdown(),e.da.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class im{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.wu(this.observer.next,e)}error(e){this.observer.error?this.wu(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}mu(){this.muted=!0}wu(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ig{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=c.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=rK(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ip(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let i=r.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await t3(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function iy(e,t){e.asyncQueue.verifyOperationInProgress();let r=await iv(e);g("FirestoreClient","Initializing OnlineComponentProvider");let i=await e.getConfiguration();await t.initialize(r,i),e.setCredentialChangeListener(e=>rU(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>rU(t.remoteStore,r)),e.onlineComponents=t}async function iv(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await ip(e,new ic)),e.offlineComponents}async function iw(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await iy(e,new id)),e.onlineComponents}async function iE(e){let t=await iw(e),r=t.eventManager;return r.onListen=r5.bind(null,t.syncEngine),r.onUnlisten=r8.bind(null,t.syncEngine),r}let iT=new Map;function iI(e){if(!ee.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function iS(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":w()}(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iC{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,i){if(!0===t&&!0===i)throw new T(E.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iA{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iC({}),this._settingsFrozen=!1,e instanceof X?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new X(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iC(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"gapi":var t;let r=e.client;return("object"!=typeof r||null===r||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)&&w(),new k(r,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iT.get(e);t&&(g("ComponentProvider","Removing Datastore"),iT.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iN{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new i_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new iN(this.firestore,e,this._key)}}class ik{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ik(this.firestore,e,this._query)}}class i_ extends ik{constructor(e,t,r){super(e,t,eO(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new iN(this.firestore,null,new ee(e))}withConverter(e){return new i_(this.firestore,e,this._path)}}function ib(e,t,...r){if(e=(0,l.m9)(e),1===arguments.length&&(t=R.R()),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,r){if(!r)throw new T(E.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof iA){let i=q.fromString(t,...r);return iI(i),new iN(e,null,new ee(i))}{if(!(e instanceof iN||e instanceof i_))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(q.fromString(t,...r));return iI(n),new iN(e.firestore,e instanceof i_?e.converter:null,new ee(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iD{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new rv(this,"async_queue_retry"),this.Fu=()=>{let e=rp();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.vo.To()};let e=rp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Bu(),this.Lu(e)}enterRestrictedMode(e){if(!this.xu){this.xu=!0,this.Ou=e||!1;let t=rp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Fu)}}enqueue(e){if(this.Bu(),this.xu)return new Promise(()=>{});let t=new I;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Cu.push(e),this.qu()))}async qu(){if(0!==this.Cu.length){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(e){if(!tK(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(e){let t=this.Du.then(()=>(this.Mu=!0,e().catch(e=>{var t;this.ku=e,this.Mu=!1;let r,i=(r=e.message||"",e.stack&&(r=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),r);throw p("INTERNAL UNHANDLED ERROR: ",i),e}).then(e=>(this.Mu=!1,e))));return this.Du=t,t}enqueueAfterDelay(e,t,r){this.Bu(),this.$u.indexOf(e)>-1&&(t=0);let i=rB.createAndSchedule(this,e,t,r,e=>this.Uu(e));return this.Nu.push(i),i}Bu(){this.ku&&w()}verifyOperationInProgress(){}async Ku(){let e;do await (e=this.Du);while(e!==this.Du)}Gu(e){for(let t of this.Nu)if(t.timerId===e)return!0;return!1}Qu(e){return this.Ku().then(()=>{for(let t of(this.Nu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Nu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ku()})}ju(e){this.$u.push(e)}Uu(e){let t=this.Nu.indexOf(e);this.Nu.splice(t,1)}}class iL extends iA{constructor(e,t,r){super(e,t,r),this.type="firestore",this._queue=new iD,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||iV(this),this._firestoreClient.terminate()}}function iR(e=(0,s.Mq)()){return(0,s.qX)(e,"firestore").getImmediate()}function iV(e){var t,r,i,n,s;let a=e._freezeSettings(),o=(r=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",n=e._persistenceKey,new Y(r,i,n,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new ig(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iF{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ix{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ix(z.fromBase64String(e))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ix(z.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iO{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}let iM=RegExp("[~\\*/\\[\\]]");function iU(e,t,r,i,n){let s=i&&!i.isEmpty(),a=void 0!==n,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${n}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iP{constructor(e,t,r,i,n){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new iN(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new iq(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(iB("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class iq extends iP{data(){return super.data()}}function iB(e,t){return"string"==typeof t?function(e,t,r){if(t.search(iM)>=0)throw iU(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new iF(...t.split("."))._internalPath}catch(i){throw iU(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof iF?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iK{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iz extends iP{constructor(e,t,r,i,n,s){super(e,t,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=n}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new i$(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(iB("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class i$ extends iz{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iG{convertValue(e,t="none"){switch(et(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Q(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){let r={};return U(e.fields,(e,i)=>{r[e]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new iO(j(e.latitude),j(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=function e(t){let r=t.mapValue.fields.__previous_value__;return H(r)?e(r):r}(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(W(e));default:return null}}convertTimestamp(e){let t=G(e);return new x(t.seconds,t.nanos)}convertDocumentKey(e,t){var r;let i=q.fromString(e);(r=tP(i))||w();let n=new X(i.get(1),i.get(3)),s=new ee(i.popFirst(5));return n.isEqual(t)||p(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ij(e){var t;e=iS(e,iN);let r=iS(e.firestore,iL);return(function(e,t,r={}){let i=new I;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,i,n){let s=new im({next(s){t.enqueueAndForget(()=>rW(e,a));let o=s.docs.has(r);!o&&s.fromCache?n.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&i&&"server"===i.source?n.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):n.resolve(s)},error:e=>n.reject(e)}),a=new rJ(eO(r.path),s,{includeMetadataChanges:!0,Sa:!0});return rH(e,a)})(await iE(e),e.asyncQueue,t,r,i)),i.promise})((r._firestoreClient||iV(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient),e._key).then(t=>(function(e,t,r){let i=r.docs.get(t._key),n=new iQ(e);return new iz(e,n,t._key,i,new iK(r.hasPendingWrites,r.fromCache),t.converter)})(r,e,t))}class iQ extends iG{constructor(e){super(),this.firestore=e}convertBytes(e){return new ix(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new iN(this.firestore,null,t)}}!function(e,t=!0){var r;d=s.Jn,(0,s.Xd)(new a.wA("firestore",(e,{options:r})=>{let i=e.getProvider("app").getImmediate(),n=new iL(i,new A(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:t},r),n._setSettings(r),n},"PUBLIC")),(0,s.KN)(h,"3.4.6",void 0),(0,s.KN)(h,"3.4.6","esm2017")}()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{311:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway-Configuration-Home-Assistant.3ca02117.png"},312:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_Home_Assistant_MQTT_discovery.e0225c4f.png"},429:function(e,t,a){"use strict";a.r(t);var n=a(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"advanced-configuration-of-the-gateway"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration-of-the-gateway"}},[e._v("#")]),e._v(" Advanced configuration of the gateway")]),e._v(" "),n("h2",{attrs:{id:"secure-connection-to-the-broker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#secure-connection-to-the-broker"}},[e._v("#")]),e._v(" Secure connection to the broker")]),e._v(" "),n("p",[e._v("By default the connection between the gateway and the MQTT broker is not encrypted and the identity of the broker is not verified.\nFor connections in a private local area network this might not be a big issue, but if you connect to a broker on the internet or the gateway is connected to a public network there is a high security risk.")]),e._v(" "),n("p",[e._v("To secure the connection, Transport Layer Security (TLS) can be used which is supported by most MQTT brokers.\nSetting up and configuring TLS in the MQTT broker is a complex process and perhaps include creating a self-signed certificate.\nThe configuration of the broker is not covered here, you should look into the documentation of your broker.")]),e._v(" "),n("h3",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("The MQTT broker is configured for TLS and you have access to the CA certificate which was used to sign the MQTT broker certificate.\nYou are using ESP8266 or ESP32, for other boards TLS is not supported.")]),e._v(" "),n("h3",{attrs:{id:"configure-secure-connection-in-the-gateway"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-secure-connection-in-the-gateway"}},[e._v("#")]),e._v(" Configure secure connection in the gateway")]),e._v(" "),n("p",[e._v("To enable the secure connection and use TLS uncomment "),n("code",[e._v("//#define SECURE_CONNECTION")]),e._v(" in "),n("code",[e._v("User_config.h")]),e._v(".\nSet "),n("code",[e._v("MQTT_SERVER")]),e._v(" to the Common Name (CN) of the certificate of the broker.\nThis can be the hostname or the ip of the broker.")]),e._v(" "),n("p",[e._v("The CA certificate should be in PEM ascii format.\nIf your CA certificate is not in the correct format or you don't know the format, use "),n("code",[e._v("openssl")]),e._v(" to convert the certificate to the correct format.\nIn "),n("code",[e._v("User_config.h")]),e._v(" replace the "),n("code",[e._v("...")]),e._v(" with the content of your certificate which is between the "),n("code",[e._v("-----BEGIN CERTIFICATE-----")]),e._v(" and "),n("code",[e._v("-----END CERTIFICATE-----")]),e._v(" lines:")]),e._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" certificate CERT_ATTRIBUTE "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token raw-string string"}},[e._v('R"EOF("\n-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n")EOF"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("If you have no ntp server in your local network (included in the router) or not using dhcp, you should uncomment "),n("code",[e._v('//# define NTP_SERVER "pool.ntp.org"')]),e._v(" to use a ntp server for time synchronization.\nThis is related to the "),n("code",[e._v("W: failed, ssl error code=54")]),e._v(" error message, which indicate that the time of the esp is not correct.")]),e._v(" "),n("p",[e._v("You can know compile and upload to your board and the gateway should connect with TLS to your broker.")]),e._v(" "),n("h2",{attrs:{id:"add-the-reveived-value-at-the-end-of-the-topic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-the-reveived-value-at-the-end-of-the-topic"}},[e._v("#")]),e._v(' Add the reveived "value" at the end of the topic')]),e._v(" "),n("p",[e._v('For the gateways that publish a "value" parameter on the json (RF, IR...), it is possible to concatenate this parameter at the end of the topic.\nSo as to activate this function you need to uncomment the line below in User_config.h')]),e._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//#define valueAsASubject true ")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Per default you see the following data:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('home/OpenMQTTGateway/SRFBtoMQTT {"raw":"2B660186042E00E7E5","value":"59365","delay":"1111","val_Thigh":"390","val_Tlow":"1070"}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("With the line uncommented you will see:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('home/OpenMQTTGateway/SRFBtoMQTT/59365 {"raw":"2B660186042E00E7E5","value":"59365","delay":"1111","val_Thigh":"390","val_Tlow":"1070"}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("It can be usefull to avoid warning or errors on certain controllers.")]),e._v(" "),n("h2",{attrs:{id:"auto-discovery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#auto-discovery"}},[e._v("#")]),e._v(" Auto discovery")]),e._v(" "),n("p",[e._v("Home Assistant discovery is enabled by default on all binaries and platformio configurations except for UNO. With Arduino IDE you have to uncomment "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/0180a0dbd55ed8e0799e30ee84f68070a6f478fa/User_config.h#L99",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZmqttDiscovery"),n("OutboundLink")],1),e._v(" in User_config.h.")]),e._v(" "),n("p",[e._v("To have a working discovery setup you need to enable it on your MQTT integration definition in HASS.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("With platformio you can deactivate discovery by adding:")]),e._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("'-UZmqttDiscovery")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"HADiscovery"\'')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("To your environment definition.")])]),e._v(" "),n("p",[e._v("So as to create the MQTT username and password, you have to create a new user(recommended) into Home Assistant->Configuration->Users (available in admin mode) or use an existing username/pwd combination (not recommended). This user doesn't need to be an administrator.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(311),alt:""}})]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("The max size of the username is 30 and 60 for the password.")])]),e._v(" "),n("p",[e._v("OMG will use the auto discovery functionality of home assistant to create sensors and gateways into your HASS instance automaticaly.")]),e._v(" "),n("p",[e._v("The gateway device will be available into Configuration->Devices section of Home Assistant.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(312),alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);
     const allCountriesData = [\
      \{"nome":"Alemanha","iso":"DE","coords":[51.0,9.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":63578.14,"gdp_ano":2023,"co2":7.051025,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"\'c1ustria","iso":"AT","coords":[47.3333,13.3333],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":65015.133,"gdp_ano":2023,"co2":6.415725,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"B\'e9lgica","iso":"BE","coords":[50.8333,4.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":64185.848,"gdp_ano":2023,"co2":7.1177025,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Bulg\'e1ria","iso":"BG","coords":[43.0,25.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2007,"gdp":33403.375,"gdp_ano":2023,"co2":5.311196,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Canad\'e1","iso":"CA","coords":[60.0,-95.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE) apenas em n\'edvel subnacional","ano":2007,"gdp":55918.93,"gdp_ano":2023,"co2":13.977411,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/02/2025"\},\
      \{"nome":"Cazaquist\'e3o","iso":"KZ","coords":[48.0,68.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2013,"gdp":34703.234,"gdp_ano":2023,"co2":12.550943,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"27/06/2023"\},\
      \{"nome":"China","iso":"CN","coords":[35.0,105.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE) apenas em n\'edvel subnacional","ano":2013,"gdp":22137.6,"gdp_ano":2023,"co2":8.366814,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"28/10/2021"\},\
      \{"nome":"Chipre","iso":"CY","coords":[35.0,33.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":53420.684,"gdp_ano":2023,"co2":5.3342433,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Coreia do Sul","iso":"KR","coords":[37.0,127.5],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2015,"gdp":50572.25,"gdp_ano":2023,"co2":11.158091,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"23/12/2021"\},\
      \{"nome":"Cro\'e1cia","iso":"HR","coords":[45.1667,15.5],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2013,"gdp":41116.87,"gdp_ano":2023,"co2":4.497998,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Dinamarca","iso":"DK","coords":[56.0,10.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":72097.305,"gdp_ano":2023,"co2":4.5837965,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Eslov\'e1quia","iso":"SK","coords":[48.6667,19.5],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":39290.434,"gdp_ano":2023,"co2":5.5706987,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Eslov\'eania","iso":"SI","coords":[46.0,15.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":48243.94,"gdp_ano":2023,"co2":5.347735,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Espanha","iso":"ES","coords":[40.0,-4.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":47141.543,"gdp_ano":2023,"co2":4.6255174,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Estados Unidos","iso":"US","coords":[38.0,-97.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE) apenas em n\'edvel subnacional","ano":2009,"gdp":74577.51,"gdp_ano":2023,"co2":14.299027,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/12/2024"\},\
      \{"nome":"Est\'f4nia","iso":"EE","coords":[59.0,26.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":42471.824,"gdp_ano":2023,"co2":7.3282313,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Finl\'e2ndia","iso":"FI","coords":[64.0,26.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":57063.523,"gdp_ano":2023,"co2":5.6456437,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Fran\'e7a","iso":"FR","coords":[46.0,2.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":55441.188,"gdp_ano":2023,"co2":4.101157,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Gr\'e9cia","iso":"GR","coords":[39.0,22.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":36905.453,"gdp_ano":2023,"co2":5.388754,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Hungria","iso":"HU","coords":[47.0,20.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":40543.992,"gdp_ano":2023,"co2":4.1491246,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Indon\'e9sia","iso":"ID","coords":[-5.0,120.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2023,"gdp":13889.883,"gdp_ano":2023,"co2":2.6075745,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"23/09/2022"\},\
      \{"nome":"Irlanda","iso":"IE","coords":[53.0,-8.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":114922.39,"gdp_ano":2023,"co2":6.6260405,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Isl\'e2ndia","iso":"IS","coords":[65.0,-18.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2008,"gdp":67255.67,"gdp_ano":2023,"co2":9.708997,"co2_ano":2023,"ndc_status":"Inativo","ndc_date":""\},\
      \{"nome":"It\'e1lia","iso":"IT","coords":[42.8333,12.8333],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":53312.07,"gdp_ano":2023,"co2":5.2682986,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Let\'f4nia","iso":"LV","coords":[57.0,25.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":37007.367,"gdp_ano":2023,"co2":3.4600034,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Liechtenstein","iso":"LI","coords":[47.1667,9.5333],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2008,"gdp":null,"gdp_ano":null,"co2":3.9732652,"co2_ano":2023,"ndc_status":"Inativo","ndc_date":""\},\
      \{"nome":"Litu\'e2nia","iso":"LT","coords":[56.0,24.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":46740.41,"gdp_ano":2023,"co2":4.366298,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Luxemburgo","iso":"LU","coords":[49.75,6.1667],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":132846.58,"gdp_ano":2023,"co2":10.5150585,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Malta","iso":"MT","coords":[35.8333,14.5833],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":61125.71,"gdp_ano":2023,"co2":3.4193249,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Montenegro","iso":"ME","coords":[42.5,19.3],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2020,"gdp":27869.65,"gdp_ano":2023,"co2":3.6754034,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"21/02/2025"\},\
      \{"nome":"M\'e9xico","iso":"MX","coords":[23.0,-102.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2021,"gdp":22142.607,"gdp_ano":2023,"co2":3.7199361,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"17/11/2022"\},\
      \{"nome":"Noruega","iso":"NO","coords":[62.0,10.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2008,"gdp":90469.81,"gdp_ano":2023,"co2":7.0484023,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"26/06/2025"\},\
      \{"nome":"Nova Zel\'e2ndia","iso":"NZ","coords":[-41.0,174.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2008,"gdp":48826.574,"gdp_ano":2023,"co2":5.8226275,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"31/01/2025"\},\
      \{"nome":"Pa\'edses Baixos","iso":"NL","coords":[52.5,5.75],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":71446.695,"gdp_ano":2023,"co2":6.558991,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Pol\'f4nia","iso":"PL","coords":[52.0,20.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":44384.168,"gdp_ano":2023,"co2":7.4628654,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Portugal","iso":"PT","coords":[39.5,-8.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":41755.48,"gdp_ano":2023,"co2":3.5690997,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Reino Unido","iso":"GB","coords":[54.0,-2.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":54542.016,"gdp_ano":2023,"co2":4.4428277,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"30/01/2025"\},\
      \{"nome":"Rom\'eania","iso":"RO","coords":[46.0,25.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2007,"gdp":40665.527,"gdp_ano":2023,"co2":3.569303,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Su\'e9cia","iso":"SE","coords":[62.0,15.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":63114.68,"gdp_ano":2023,"co2":3.464577,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      \{"nome":"Su\'ed\'e7a","iso":"CH","coords":[47.0,8.0],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2008,"gdp":82557.55,"gdp_ano":2023,"co2":3.6905727,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"29/01/2025"\},\
      \{"nome":"Tch\'e9quia","iso":"CZ","coords":[49.75,15.5],"tipo":"Possui um Sistema de Com\'e9rcio de Emiss\'f5es (SCE)","ano":2005,"gdp":49681.06,"gdp_ano":2023,"co2":7.92107,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2023"\},\
      // Pa\'edses sem SCE (lista completa segue)\
      // Esta lista foi gerada e mesclada programaticamente.\
      \{"nome":"Afeganist\'e3o","iso":"AF","coords":[33.0,65.0],"gdp":1992.42,"gdp_ano":2023,"co2":0.27,"co2_ano":2023\},\
      \{"nome":"\'c1frica do Sul","iso":"ZA","coords":[-29.0,24.0],"gdp":13690.39,"gdp_ano":2023,"co2":7.16,"co2_ano":2023,"ndc_status":"Inativo","ndc_date":""\},\
      \{"nome":"Alb\'e2nia","iso":"AL","coords":[41.0,20.0],"gdp":18244.29,"gdp_ano":2023,"co2":1.83,"co2_ano":2023\},\
      \{"nome":"Andorra","iso":"AD","coords":[42.5,1.6],"gdp":64631.3,"gdp_ano":2023,"co2":5.24,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"08/11/2022"\},\
      \{"nome":"Angola","iso":"AO","coords":[-12.5,18.5],"gdp":7244.89,"gdp_ano":2023,"co2":0.57,"co2_ano":2023\},\
      \{"nome":"Anguilla","iso":"AI","coords":[18.25,-63.1667],"co2":10.04,"co2_ano":2023\},\
      \{"nome":"Ant\'edgua e Barbuda","iso":"AG","coords":[17.05,-61.8],"gdp":28967.26,"gdp_ano":2023,"co2":6.91,"co2_ano":2023\},\
      \{"nome":"Ar\'e1bia Saudita","iso":"SA","coords":[25.0,45.0],"gdp":55055.4,"gdp_ano":2023,"co2":17.56,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"23/10/2021"\},\
      \{"nome":"Arg\'e9lia","iso":"DZ","coords":[28.0,3.0],"gdp":15159.32,"gdp_ano":2023,"co2":3.86,"co2_ano":2023\},\
      \{"nome":"Argentina","iso":"AR","coords":[-34.0,-64.0],"gdp":27104.98,"gdp_ano":2023,"co2":4.3,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"02/11/2021"\},\
      \{"nome":"Arm\'eania","iso":"AM","coords":[40.0,45.0],"gdp":19230.19,"gdp_ano":2023,"co2":2.58,"co2_ano":2023\},\
      \{"nome":"Aruba","iso":"AW","coords":[12.5,-69.9667],"gdp":40516.81,"gdp_ano":2023,"co2":8.04,"co2_ano":2023\},\
      \{"nome":"Austr\'e1lia","iso":"AU","coords":[-27.0,133.0],"gdp":59552.88,"gdp_ano":2023,"co2":14.48,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"16/06/2022"\},\
      \{"nome":"Azerbaij\'e3o","iso":"AZ","coords":[40.5,47.5],"gdp":21262.3,"gdp_ano":2023,"co2":4.26,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"10/10/2023"\},\
      \{"nome":"Bahamas","iso":"BS","coords":[24.25,-76.0],"gdp":33105.61,"gdp_ano":2023,"co2":6.27,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"07/11/2022"\},\
      \{"nome":"Bahrein","iso":"BH","coords":[26.0,50.55],"gdp":57213.09,"gdp_ano":2023,"co2":23.27,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"18/10/2021"\},\
      \{"nome":"Bangladesh","iso":"BD","coords":[24.0,90.0],"gdp":8242.4,"gdp_ano":2023,"co2":0.66,"co2_ano":2023\},\
      \{"nome":"Barbados","iso":"BB","coords":[13.1667,-59.5333],"gdp":19224.46,"gdp_ano":2023,"co2":4.22,"co2_ano":2023\},\
      \{"nome":"Belarus","iso":"BY","coords":[53.0,28.0],"gdp":27718.32,"gdp_ano":2023,"co2":6.2,"co2_ano":2023\},\
      \{"nome":"Belize","iso":"BZ","coords":[17.25,-88.75],"gdp":12455.3,"gdp_ano":2023,"co2":1.62,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"14/06/2025"\},\
      \{"nome":"Benin","iso":"BJ","coords":[9.5,2.25],"gdp":3721.22,"gdp_ano":2023,"co2":0.4,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/10/2021"\},\
      \{"nome":"Bermuda","iso":"BM","coords":[32.3333,-64.75],"gdp":98041.69,"gdp_ano":2023,"co2":8.08,"co2_ano":2023\},\
      \{"nome":"But\'e3o","iso":"BT","coords":[27.5,90.5],"gdp":14061.31,"gdp_ano":2022,"co2":2.18,"co2_ano":2023\},\
      \{"nome":"Bol\'edvia","iso":"BO","coords":[-17.0,-65.0],"gdp":9843.97,"gdp_ano":2023,"co2":1.91,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"15/04/2022"\},\
      \{"nome":"Bonaire, Santo Eust\'e1quio e Saba","iso":"BQ","coords":[12.18,-68.23],"co2":3.85,"co2_ano":2023\},\
      \{"nome":"B\'f3snia e Herzegovina","iso":"BA","coords":[44.0,18.0],"gdp":20126.38,"gdp_ano":2023,"co2":6.4,"co2_ano":2023\},\
      \{"nome":"Botsuana","iso":"BW","coords":[-22.0,24.0],"gdp":18846.25,"gdp_ano":2023,"co2":2.37,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"24/12/2024"\},\
      \{"nome":"Brasil","iso":"BR","coords":[-10.0,-55.0],"gdp":19018.24,"gdp_ano":2023,"co2":2.2,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"13/11/2024"\},\
      \{"nome":"Brunei","iso":"BN","coords":[4.5,114.6667],"gdp":76828.4,"gdp_ano":2022,"co2":15.57,"co2_ano":2023\},\
      \{"nome":"Burkina Faso","iso":"BF","coords":[13.0,-2.0],"gdp":2482.07,"gdp_ano":2023,"co2":0.17,"co2_ano":2023\},\
      \{"nome":"Burundi","iso":"BI","coords":[-3.5,30.0],"gdp":828.86,"gdp_ano":2023,"co2":0.04,"co2_ano":2023\},\
      \{"nome":"Camboja","iso":"KH","coords":[13.0,105.0],"gdp":6690.59,"gdp_ano":2023,"co2":0.81,"co2_ano":2023\},\
      \{"nome":"Cabo Verde","iso":"CV","coords":[16.0,-24.0],"gdp":9288.4,"gdp_ano":2023,"co2":1.15,"co2_ano":2023\},\
      \{"nome":"Camar\'f5es","iso":"CM","coords":[6.0,12.0],"gdp":4870.57,"gdp_ano":2023,"co2":0.38,"co2_ano":2023\},\
      \{"nome":"Chade","iso":"TD","coords":[15.0,19.0],"gdp":1679.46,"gdp_ano":2023,"co2":0.08,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/10/2021"\},\
      \{"nome":"Chile","iso":"CL","coords":[-30.0,-71.0],"gdp":29462.64,"gdp_ano":2023,"co2":4.54,"co2_ano":2023\},\
      \{"nome":"Col\'f4mbia","iso":"CO","coords":[4.0,-72.0],"gdp":18692.38,"gdp_ano":2023,"co2":1.54,"co2_ano":2023\},\
      \{"nome":"Comores","iso":"KM","coords":[-12.1667,44.25],"gdp":3498.8,"gdp_ano":2023,"co2":0.22,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"05/11/2021"\},\
      \{"nome":"Congo","iso":"CG","coords":[-1.0,15.0],"gdp":6172.29,"gdp_ano":2023,"co2":2.21,"co2_ano":2023\},\
      \{"nome":"Congo, Rep\'fablica Democr\'e1tica do","iso":"CD","coords":[0.0,25.0],"gdp":1455.84,"gdp_ano":2023,"co2":0.08,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"28/12/2021"\},\
      \{"nome":"Costa Rica","iso":"CR","coords":[10.0,-84.0],"gdp":26292.77,"gdp_ano":2023,"co2":1.51,"co2_ano":2023\},\
      \{"nome":"Costa do Marfim","iso":"CI","coords":[8.0,-5.0],"gdp":6485.32,"gdp_ano":2023,"co2":0.44,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"09/05/2022"\},\
      \{"nome":"Cuba","iso":"CU","coords":[21.5,-80.0],"gdp":null,"gdp_ano":null,"co2":2.45,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"27/02/2025"\},\
      \{"nome":"Cura\'e7ao","iso":"CW","coords":[12.18,-68.97],"co2":6.82,"co2_ano":2023\},\
      \{"nome":"Djibuti","iso":"DJ","coords":[11.5,43.0],"gdp":6400.62,"gdp_ano":2023,"co2":0.69,"co2_ano":2023\},\
      \{"nome":"Dominica","iso":"DM","coords":[15.4167,-61.3333],"gdp":17420.25,"gdp_ano":2023,"co2":2.0,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"04/07/2022"\},\
      \{"nome":"Rep\'fablica Dominicana","iso":"DO","coords":[19.0,-70.6667],"gdp":23087.93,"gdp_ano":2023,"co2":2.11,"co2_ano":2023\},\
      \{"nome":"Equador","iso":"EC","coords":[-2.0,-77.5],"gdp":14472.32,"gdp_ano":2023,"co2":2.21,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"06/02/2025"\},\
      \{"nome":"Egito","iso":"EG","coords":[27.0,30.0],"gdp":16691.13,"gdp_ano":2023,"co2":2.25,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"26/06/2023"\},\
      \{"nome":"El Salvador","iso":"SV","coords":[13.8333,-88.9167],"gdp":11404.33,"gdp_ano":2023,"co2":1.25,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"04/01/2022"\},\
      \{"nome":"Guin\'e9 Equatorial","iso":"GQ","coords":[2.0,10.0],"gdp":15688.24,"gdp_ano":2023,"co2":3.73,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"24/10/2022"\},\
      \{"nome":"Eritreia","iso":"ER","coords":[15.0,39.0],"gdp":1599.4,"gdp_ano":2011,"co2":0.1,"co2_ano":2023\},\
      \{"nome":"Eti\'f3pia","iso":"ET","coords":[8.0,38.0],"gdp":2755.46,"gdp_ano":2023,"co2":0.16,"co2_ano":2023\},\
      \{"nome":"Ilhas Malvinas","iso":"FK","coords":[-51.75,-59.0],"co2":11.2,"co2_ano":2023\},\
      \{"nome":"Ilhas Faro\'e9","iso":"FO","coords":[62.0,-7.0],"co2":0.99,"co2_ano":2023\},\
      \{"nome":"Fiji","iso":"FJ","coords":[-18.0,175.0],"gdp":13652.49,"gdp_ano":2023,"co2":1.76,"co2_ano":2023\},\
      \{"nome":"Guiana Francesa","iso":"GF","coords":[4.0,-53.0]\},\
      \{"nome":"Polin\'e9sia Francesa","iso":"PF","coords":[-15.0,-140.0],"gdp":null,"gdp_ano":null,"co2":3.39,"co2_ano":2023\},\
      \{"nome":"Gab\'e3o","iso":"GA","coords":[-1.0,11.75],"gdp":18702.69,"gdp_ano":2023,"co2":2.94,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"06/07/2022"\},\
      \{"nome":"G\'e2mbia","iso":"GM","coords":[13.4667,-16.5667],"gdp":2932.28,"gdp_ano":2023,"co2":0.28,"co2_ano":2023\},\
      \{"nome":"Ge\'f3rgia","iso":"GE","coords":[42.0,43.5],"gdp":22590.53,"gdp_ano":2023,"co2":3.33,"co2_ano":2023\},\
      \{"nome":"Gana","iso":"GH","coords":[8.0,-2.0],"gdp":6796.47,"gdp_ano":2023,"co2":0.63,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"04/11/2021"\},\
      \{"nome":"Gibraltar","iso":"GI","coords":[36.1833,-5.3667],"co2":39.38,"co2_ano":2023\},\
      \{"nome":"Groenl\'e2ndia","iso":"GL","coords":[72.0,-40.0]\},\
      \{"nome":"Granada","iso":"GD","coords":[12.1167,-61.6667],"gdp":16946.47,"gdp_ano":2023,"co2":2.38,"co2_ano":2023\},\
      \{"nome":"Guadalupe","iso":"GP","coords":[16.25,-61.5833]\},\
      \{"nome":"Guam","iso":"GU","coords":[13.4667,144.7833]\},\
      \{"nome":"Guatemala","iso":"GT","coords":[15.5,-90.25],"gdp":12389.39,"gdp_ano":2023,"co2":1.13,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"23/05/2022"\},\
      \{"nome":"Guernsey","iso":"GG","coords":[49.5,-2.56]\},\
      \{"nome":"Guin\'e9","iso":"GN","coords":[11.0,-10.0],"gdp":3949.34,"gdp_ano":2023,"co2":0.26,"co2_ano":2023\},\
      \{"nome":"Guin\'e9-Bissau","iso":"GW","coords":[12.0,-15.0],"gdp":2578.8,"gdp_ano":2023,"co2":0.25,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/10/2021"\},\
      \{"nome":"Guiana","iso":"GY","coords":[5.0,-59.0],"gdp":49315.16,"gdp_ano":2023,"co2":4.19,"co2_ano":2023\},\
      \{"nome":"Haiti","iso":"HT","coords":[19.0,-72.4167],"gdp":2956.46,"gdp_ano":2023,"co2":0.29,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"01/06/2022"\},\
      \{"nome":"Santa S\'e9 (Cidade do Vaticano)","iso":"VA","coords":[41.9,12.45]\},\
      \{"nome":"Honduras","iso":"HN","coords":[15.0,-86.5],"gdp":6468.3,"gdp_ano":2023,"co2":1.25,"co2_ano":2023\},\
      \{"nome":"Hong Kong","iso":"HK","coords":[22.25,114.1667],"gdp":64467.57,"gdp_ano":2023,"co2":5.4,"co2_ano":2023\},\
      \{"nome":"\'cdndia","iso":"IN","coords":[20.0,77.0],"gdp":9160.06,"gdp_ano":2023,"co2":1.91,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"26/08/2022"\},\
      \{"nome":"Ir\'e3","iso":"IR","coords":[32.0,53.0],"gdp":15912.03,"gdp_ano":2022,"co2":8.09,"co2_ano":2023\},\
      \{"nome":"Iraque","iso":"IQ","coords":[33.0,44.0],"gdp":12711.06,"gdp_ano":2022,"co2":3.99,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"15/10/2021"\},\
      \{"nome":"Ilha de Man","iso":"IM","coords":[54.23,-4.55]\},\
      \{"nome":"Israel","iso":"IL","coords":[31.5,34.75],"gdp":48432.11,"gdp_ano":2023,"co2":7.42,"co2_ano":2023\},\
      \{"nome":"Jamaica","iso":"JM","coords":[18.25,-77.5],"gdp":10291.31,"gdp_ano":2023,"co2":1.94,"co2_ano":2023\},\
      \{"nome":"Jap\'e3o","iso":"JP","coords":[36.0,138.0],"gdp":46157.64,"gdp_ano":2023,"co2":8.57,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"18/02/2025"\},\
      \{"nome":"Jersey","iso":"JE","coords":[49.21,-2.13]\},\
      \{"nome":"Jord\'e2nia","iso":"JO","coords":[31.0,36.0],"gdp":9362.59,"gdp_ano":2023,"co2":2.45,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/10/2021"\},\
      \{"nome":"Qu\'eania","iso":"KE","coords":[1.0,38.0],"gdp":5682.99,"gdp_ano":2023,"co2":0.3,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"30/04/2025"\},\
      \{"nome":"Kiribati","iso":"KI","coords":[1.4167,173.0],"gdp":3195.87,"gdp_ano":2023,"co2":0.61,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"02/03/2023"\},\
      \{"nome":"Coreia do Norte","iso":"KP","coords":[40.0,127.0],"gdp":null,"gdp_ano":null,"co2":1.09,"co2_ano":2023\},\
      \{"nome":"Kosovo","iso":"XK","coords":[42.58,21.0],"gdp":13642.68,"gdp_ano":2022\},\
      \{"nome":"Kuwait","iso":"KW","coords":[29.3375,47.6581],"gdp":46458.2,"gdp_ano":2023,"co2":23.47,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/10/2021"\},\
      \{"nome":"Quirguist\'e3o","iso":"KG","coords":[41.0,75.0],"gdp":6403.14,"gdp_ano":2022,"co2":1.47,"co2_ano":2023\},\
      \{"nome":"Laos","iso":"LA","coords":[18.0,105.0],"gdp":8372.16,"gdp_ano":2022,"co2":0.69,"co2_ano":2023\},\
      \{"nome":"L\'edbano","iso":"LB","coords":[33.8333,35.8333],"gdp":11474.75,"gdp_ano":2021,"co2":3.03,"co2_ano":2023\},\
      \{"nome":"Lesoto","iso":"LS","coords":[-29.5,28.5],"gdp":2595.83,"gdp_ano":2023,"co2":1.13,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"05/02/2025"\},\
      \{"nome":"Lib\'e9ria","iso":"LR","coords":[6.5,-9.5],"gdp":1616.92,"gdp_ano":2023,"co2":0.17,"co2_ano":2023\},\
      \{"nome":"L\'edbia","iso":"LY","coords":[25.0,17.0],"gdp":12478.14,"gdp_ano":2022,"co2":7.39,"co2_ano":2023\},\
      \{"nome":"Macau","iso":"MO","coords":[22.1667,113.55],"gdp":104961.64,"gdp_ano":2023\},\
      \{"nome":"Maced\'f4nia do Norte","iso":"MK","coords":[41.8333,22.0],"gdp":23584.56,"gdp_ano":2023,"co2":3.73,"co2_ano":2023\},\
      \{"nome":"Madag\'e1scar","iso":"MG","coords":[-20.0,47.0],"gdp":1643.31,"gdp_ano":2023,"co2":0.16,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"29/01/2024"\},\
      \{"nome":"Malawi","iso":"MW","coords":[-13.5,34.0],"gdp":1648.44,"gdp_ano":2023,"co2":0.12,"co2_ano":2023\},\
      \{"nome":"Mal\'e1sia","iso":"MY","coords":[2.5,112.5],"gdp":32812.3,"gdp_ano":2023,"co2":7.82,"co2_ano":2023\},\
      \{"nome":"Maldivas","iso":"MV","coords":[3.25,73.0],"gdp":22286.98,"gdp_ano":2022,"co2":2.65,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"27/02/2025"\},\
      \{"nome":"Mali","iso":"ML","coords":[17.0,-4.0],"gdp":2394.67,"gdp_ano":2023,"co2":0.11,"co2_ano":2023\},\
      \{"nome":"Ilhas Marshall","iso":"MH","coords":[9.0,168.0],"gdp":6786.7,"gdp_ano":2023,"co2":2.37,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"10/02/2025"\},\
      \{"nome":"Martinica","iso":"MQ","coords":[14.6667,-61.0]\},\
      \{"nome":"Maurit\'e2nia","iso":"MR","coords":[20.0,-12.0],"gdp":6258.71,"gdp_ano":2023,"co2":1.15,"co2_ano":2023\},\
      \{"nome":"Maur\'edcia","iso":"MU","coords":[-20.2833,57.55],"gdp":26590.42,"gdp_ano":2023,"co2":2.99,"co2_ano":2023\},\
      \{"nome":"Mayotte","iso":"YT","coords":[-12.8333,45.1667]\},\
      \{"nome":"Micron\'e9sia","iso":"FM","coords":[6.9167,158.25],"gdp":3886.7,"gdp_ano":2022,"co2":1.12,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"17/10/2022"\},\
      \{"nome":"Moldova","iso":"MD","coords":[47.0,29.0],"gdp":15855.27,"gdp_ano":2023,"co2":1.9,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"06/05/2025"\},\
      \{"nome":"M\'f4naco","iso":"MC","coords":[43.7333,7.4],"gdp":null,"gdp_ano":null,"co2":0.46,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"16/07/2025"\},\
      \{"nome":"Mong\'f3lia","iso":"MN","coords":[46.0,105.0],"gdp":16222.86,"gdp_ano":2023,"co2":11.83,"co2_ano":2023\},\
      \{"nome":"Montserrat","iso":"MS","coords":[16.75,-62.2]\},\
      \{"nome":"Marrocos","iso":"MA","coords":[32.0,-5.0],"gdp":8868.71,"gdp_ano":2023,"co2":1.63,"co2_ano":2023\},\
      \{"nome":"Mo\'e7ambique","iso":"MZ","coords":[-18.25,35.0],"gdp":1511.64,"gdp_ano":2023,"co2":0.28,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"27/12/2021"\},\
      \{"nome":"Myanmar","iso":"MM","coords":[22.0,98.0],"gdp":5364.14,"gdp_ano":2023,"co2":0.49,"co2_ano":2023\},\
      \{"nome":"Nam\'edbia","iso":"NA","coords":[-22.0,17.0],"gdp":10105.51,"gdp_ano":2023,"co2":1.62,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"17/01/2024"\},\
      \{"nome":"Nauru","iso":"NR","coords":[-0.5333,166.9167],"gdp":12462.84,"gdp_ano":2023,"co2":6.01,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"14/10/2021"\},\
      \{"nome":"Nepal","iso":"NP","coords":[28.0,84.0],"gdp":4859.8,"gdp_ano":2023,"co2":0.44,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/05/2025"\},\
      \{"nome":"Nova Caled\'f4nia","iso":"NC","coords":[-21.5,165.5]\},\
      \{"nome":"Nicar\'e1gua","iso":"NI","coords":[13.0,-85.0],"gdp":7486.94,"gdp_ano":2023,"co2":1.09,"co2_ano":2023\},\
      \{"nome":"N\'edger","iso":"NE","coords":[16.0,8.0],"gdp":1703.4,"gdp_ano":2023,"co2":0.1,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"13/12/2021"\},\
      \{"nome":"Nig\'e9ria","iso":"NG","coords":[10.0,8.0],"gdp":5593.06,"gdp_ano":2023,"co2":0.6,"co2_ano":2023\},\
      \{"nome":"Niue","iso":"NU","coords":[-19.0333,-169.8667],"ndc_status":"Ativo","ndc_date":"17/07/2025"\},\
      \{"nome":"Ilha Norfolk","iso":"NF","coords":[-29.0333,167.95]\},\
      \{"nome":"Ilhas Marianas do Norte","iso":"MP","coords":[15.2,145.75]\},\
      \{"nome":"Om\'e3","iso":"OM","coords":[21.0,57.0],"gdp":38311.42,"gdp_ano":2022,"co2":17.06,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"29/11/2023"\},\
      \{"nome":"Paquist\'e3o","iso":"PK","coords":[30.0,70.0],"gdp":5439.19,"gdp_ano":2023,"co2":0.9,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"21/10/2021"\},\
      \{"nome":"Palau","iso":"PW","coords":[7.5,134.5],"gdp":15796.54,"gdp_ano":2022,"co2":7.42,"co2_ano":2023\},\
      \{"nome":"Palestina","iso":"PS","coords":[32.0,35.25],"gdp":5313.1,"gdp_ano":2022,"co2":0.66,"co2_ano":2023\},\
      \{"nome":"Panam\'e1","iso":"PA","coords":[9.0,-80.0],"gdp":35863.88,"gdp_ano":2023,"co2":2.76,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"13/06/2024"\},\
      \{"nome":"Papua-Nova Guin\'e9","iso":"PG","coords":[-6.0,147.0],"gdp":4174.44,"gdp_ano":2023,"co2":0.94,"co2_ano":2023\},\
      \{"nome":"Paraguai","iso":"PY","coords":[-23.0,-58.0],"gdp":15783.12,"gdp_ano":2023,"co2":1.48,"co2_ano":2023\},\
      \{"nome":"Peru","iso":"PE","coords":[-10.0,-76.0],"gdp":15294.26,"gdp_ano":2023,"co2":1.95,"co2_ano":2023\},\
      \{"nome":"Filipinas","iso":"PH","coords":[13.0,122.0],"gdp":9901.06,"gdp_ano":2023,"co2":1.25,"co2_ano":2023\},\
      \{"nome":"Ilhas Pitcairn","iso":"PN","coords":[-25.0667,-130.1]\},\
      \{"nome":"Porto Rico","iso":"PR","coords":[18.25,-66.5],"gdp":42994.79,"gdp_ano":2023\},\
      \{"nome":"Catar","iso":"QA","coords":[25.5,51.25],"gdp":116159.14,"gdp_ano":2023,"co2":37.59,"co2_ano":2023\},\
      \{"nome":"R\'fassia","iso":"RU","coords":[60.0,100.0],"gdp":39753.46,"gdp_ano":2023,"co2":12.0,"co2_ano":2023,"ndc_status":"Inativo","ndc_date":""\},\
      \{"nome":"Ruanda","iso":"RW","coords":[-2.0,30.0],"gdp":3060.03,"gdp_ano":2023,"co2":0.11,"co2_ano":2023\},\
      \{"nome":"Reuni\'e3o","iso":"RE","coords":[-21.1,55.6]\},\
      \{"nome":"S\'e3o Bartolomeu","iso":"BL","coords":[17.9,-62.8333]\},\
      \{"nome":"Santa Helena","iso":"SH","coords":[-15.9333,-5.7]\},\
      \{"nome":"S\'e3o Crist\'f3v\'e3o e N\'e9vis","iso":"KN","coords":[17.3333,-62.75],"gdp":30409.4,"gdp_ano":2022,"co2":2.76,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"25/10/2021"\},\
      \{"nome":"Santa L\'facia","iso":"LC","coords":[13.8833,-61.1333],"gdp":23403.46,"gdp_ano":2023,"co2":2.06,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"06/02/2025"\},\
      \{"nome":"S\'e3o Martinho (parte francesa)","iso":"MF","coords":[18.083333,-63.05]\},\
      \{"nome":"S\'e3o Pedro e Miquel\'e3o","iso":"PM","coords":[46.8333,-56.3333]\},\
      \{"nome":"S\'e3o Vicente e Granadinas","iso":"VC","coords":[13.25,-61.2],"gdp":18335.21,"gdp_ano":2023,"co2":1.76,"co2_ano":2023\},\
      \{"nome":"Samoa","iso":"WS","coords":[-13.5833,-172.3333],"gdp":6304.35,"gdp_ano":2023,"co2":1.15,"co2_ano":2023\},\
      \{"nome":"San Marino","iso":"SM","coords":[43.7667,12.4167],"gdp":70887.57,"gdp_ano":2022,"co2":13.91,"co2_ano":2023\},\
      \{"nome":"S\'e3o Tom\'e9 e Pr\'edncipe","iso":"ST","coords":[1.0,7.0],"gdp":5541.3,"gdp_ano":2023,"co2":0.58,"co2_ano":2023\},\
      \{"nome":"Senegal","iso":"SN","coords":[14.0,-14.0],"gdp":4317.23,"gdp_ano":2023,"co2":0.72,"co2_ano":2023\},\
      \{"nome":"S\'e9rvia","iso":"RS","coords":[44.0,21.0],"gdp":26030.02,"gdp_ano":2023,"co2":5.0,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"24/08/2022"\},\
      \{"nome":"Seychelles","iso":"SC","coords":[-4.5833,55.6667],"gdp":29468.95,"gdp_ano":2023,"co2":6.83,"co2_ano":2023\},\
      \{"nome":"Serra Leoa","iso":"SL","coords":[8.5,-11.5],"gdp":3034.22,"gdp_ano":2023,"co2":0.22,"co2_ano":2023\},\
      \{"nome":"Singapura","iso":"SG","coords":[1.3667,103.8],"gdp":127543.55,"gdp_ano":2023,"co2":7.42,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"10/02/2025"\},\
      \{"nome":"Sint Maarten (parte holandesa)","iso":"SX","coords":[18.05,-63.083333]\},\
      \{"nome":"Ilhas Salom\'e3o","iso":"SB","coords":[-8.0,159.0],"gdp":2534.03,"gdp_ano":2023,"co2":0.59,"co2_ano":2023\},\
      \{"nome":"Som\'e1lia","iso":"SO","coords":[10.0,49.0],"gdp":1402.47,"gdp_ano":2023,"co2":0.04,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"19/06/2025"\},\
      \{"nome":"Ge\'f3rgia do Sul e Ilhas Sandwich do Sul","iso":"GS","coords":[-54.5,-37.0]\},\
      \{"nome":"Sud\'e3o do Sul","iso":"SS","coords":[8.0,30.0],"gdp":1131.57,"gdp_ano":2015,"co2":0.16,"co2_ano":2023\},\
      \{"nome":"Sri Lanka","iso":"LK","coords":[7.0,81.0],"gdp":13029.52,"gdp_ano":2023,"co2":1.13,"co2_ano":2023\},\
      \{"nome":"Sud\'e3o","iso":"SD","coords":[15.0,30.0],"gdp":2469.19,"gdp_ano":2023,"co2":0.35,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"22/09/2022"\},\
      \{"nome":"Suriname","iso":"SR","coords":[4.0,-56.0],"gdp":19043.7,"gdp_ano":2023,"co2":5.4,"co2_ano":2023\},\
      \{"nome":"Svalbard e Jan Mayen","iso":"SJ","coords":[78.0,20.0]\},\
      \{"nome":"Suazil\'e2ndia","iso":"SZ","coords":[-26.5,31.5],"gdp":10132.19,"gdp_ano":2023,"co2":0.91,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/10/2021"\},\
      \{"nome":"S\'edria","iso":"SY","coords":[35.0,38.0],"gdp":4454.85,"gdp_ano":2020,"co2":1.05,"co2_ano":2023\},\
      \{"nome":"Taiwan","iso":"TW","coords":[23.5,121.0],"co2":11.23,"co2_ano":2023\},\
      \{"nome":"Tajiquist\'e3o","iso":"TJ","coords":[39.0,71.0],"gdp":4472.32,"gdp_ano":2022,"co2":0.36,"co2_ano":2023\},\
      \{"nome":"Tanz\'e2nia","iso":"TZ","coords":[-6.0,35.0],"gdp":3620.79,"gdp_ano":2023,"co2":0.2,"co2_ano":2023\},\
      \{"nome":"Tail\'e2ndia","iso":"TH","coords":[15.0,100.0],"gdp":21142.66,"gdp_ano":2023,"co2":3.86,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"02/11/2022"\},\
      \{"nome":"Timor-Leste","iso":"TL","coords":[-8.55,125.5167],"gdp":4328.51,"gdp_ano":2022,"co2":0.44,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"08/11/2022"\},\
      \{"nome":"Togo","iso":"TG","coords":[8.0,1.1667],"gdp":2767.52,"gdp_ano":2023,"co2":0.34,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/10/2021"\},\
      \{"nome":"Toquelau","iso":"TK","coords":[-9.0,-172.0]\},\
      \{"nome":"Tonga","iso":"TO","coords":[-20.0,-175.0],"gdp":6901.74,"gdp_ano":2023,"co2":1.54,"co2_ano":2023\},\
      \{"nome":"Trindade e Tobago","iso":"TT","coords":[11.0,-61.0],"gdp":31705.83,"gdp_ano":2023,"co2":21.63,"co2_ano":2023\},\
      \{"nome":"Tun\'edsia","iso":"TN","coords":[34.0,9.0],"gdp":12552.99,"gdp_ano":2023,"co2":2.51,"co2_ano":2023\},\
      \{"nome":"Turquia","iso":"TR","coords":[39.0,35.0],"gdp":34609.91,"gdp_ano":2023,"co2":5.48,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"13/04/2023"\},\
      \{"nome":"Turcomenist\'e3o","iso":"TM","coords":[40.0,60.0],"gdp":17866.4,"gdp_ano":2022,"co2":14.73,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"30/01/2023"\},\
      \{"nome":"Ilhas Turcas e Caicos","iso":"TC","coords":[21.75,-71.5833],"gdp":30588.4,"gdp_ano":2022,"co2":4.54,"co2_ano":2023\},\
      \{"nome":"Tuvalu","iso":"TV","coords":[-8.0,178.0],"gdp":5812.39,"gdp_ano":2022,"co2":1.0,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"16/11/2022"\},\
      \{"nome":"Uganda","iso":"UG","coords":[1.0,32.0],"gdp":2791.06,"gdp_ano":2023,"co2":0.14,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"12/09/2022"\},\
      \{"nome":"Ucr\'e2nia","iso":"UA","coords":[49.0,32.0],"gdp":15885.23,"gdp_ano":2022,"co2":4.31,"co2_ano":2023\},\
      \{"nome":"Emirados \'c1rabes Unidos","iso":"AE","coords":[24.0,54.0],"gdp":68577.54,"gdp_ano":2022,"co2":20.67,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"06/11/2024"\},\
      \{"nome":"Uruguai","iso":"UY","coords":[-33.0,-56.0],"gdp":31019.31,"gdp_ano":2023,"co2":2.12,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"30/12/2024"\},\
      \{"nome":"Uzbequist\'e3o","iso":"UZ","coords":[41.0,64.0],"gdp":10007.69,"gdp_ano":2023,"co2":3.73,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"30/10/2021"\},\
      \{"nome":"Vanuatu","iso":"VU","coords":[-16.0,167.0],"gdp":3118.4,"gdp_ano":2023,"co2":0.55,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"09/08/2022"\},\
      \{"nome":"Venezuela","iso":"VE","coords":[8.0,-66.0],"gdp":null,"gdp_ano":null,"co2":3.51,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"09/11/2021"\},\
      \{"nome":"Vietn\'e3","iso":"VN","coords":[16.0,106.0],"gdp":13491.88,"gdp_ano":2022,"co2":3.48,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"08/11/2022"\},\
      \{"nome":"Ilhas Virgens Brit\'e2nicas","iso":"VG","coords":[18.5,-64.5]\},\
      \{"nome":"Ilhas Virgens Americanas","iso":"VI","coords":[18.3333,-64.8333]\},\
      \{"nome":"Wallis e Futuna","iso":"WF","coords":[-13.3,-176.2]\},\
      \{"nome":"Saara Ocidental","iso":"EH","coords":[24.5,-13.0]\},\
      \{"nome":"I\'eamen","iso":"YE","coords":[15.0,48.0],"gdp":null,"gdp_ano":null,"co2":0.3,"co2_ano":2023\},\
      \{"nome":"Z\'e2mbia","iso":"ZM","coords":[-15.0,30.0],"gdp":3673.48,"gdp_ano":2023,"co2":0.35,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"10/03/2025"\},\
      \{"nome":"Zimb\'e1bue","iso":"ZW","coords":[-20.0,30.0],"gdp":3442.25,"gdp_ano":2023,"co2":0.77,"co2_ano":2023,"ndc_status":"Ativo","ndc_date":"10/02/2025"\}\
    ];}

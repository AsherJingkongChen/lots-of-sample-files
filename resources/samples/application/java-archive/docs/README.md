# `application/java-archive`

## [PD.1.json-20231013.jar](../files/PD.1.json-20231013.jar)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

## [PD.2.json-rezip.jar](../files/PD.2.json-rezip.jar)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- Modified:
  - by Asher Jingkong Chen
  - with Info-ZIP unzip (v6.0) and zip (v3.0):
    - `unzip -d dir PD.1.json-20231013.jar`
    - `cp -r dir dis`
    - `cd dis`
    - `zip -9r ../PD.2.json-rezip.jar .`
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

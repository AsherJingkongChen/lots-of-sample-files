# `application/zip`

## [PD.1.json-20231013.zip](../files/PD.1.json-20231013.zip)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

## [PD.2.json-split.z01](../files/PD.2.json-split.z01)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- Modified:
  - by Asher Jingkong Chen
  - with Info-ZIP unzip (v6.0) and zip (v3.0):
    - `unzip -d dir PD.1.json-20231013.zip`
    - `cp -r dir dis`
    - `cd dis`
    - `zip -9r -s 64k ../PD.2.json-split.zip .`
  - _NOTE: The associated output file [PD.2.json-split.zip](../../../../archives/samples/application/zip/PD.2.json-split.zip) is archived_
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

## [PD.3.json-split-fixed.zip](../files/PD.3.json-split-fixed.zip)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- Modified:
  - by Asher Jingkong Chen
  - with Info-ZIP zip (v3.0):
    - `unzip -d dir PD.1.json-20231013.zip`
    - `cp -r dir dis`
    - `cd dis`
    - `zip -9r -s 64k ../PD.2.json-split.zip .`
    - `cd ..`
    - `zip -F PD.2.json-split.zip --out PD.3.json-split-fixed.zip`
  - _NOTE: The associated output file [PD.2.json-split.zip](../../../../archives/samples/application/zip/PD.2.json-split.zip) is archived_
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

## [PD.4.zip](../files/PD.4.zip)

- License: [CC0 1.0](./LICENSE.2.txt)
- Original Author(s): Asher Jingkong Chen
- Created with: Info-ZIP unzip (v6.0) and zip (v3.0)
  - `zip -9r PD.4.zip PD.4`

## [PD.5.empty.zip](../files/PD.5.empty.zip)

- License: [CC0 1.0](./LICENSE.2.txt)
- Original Author(s): Asher Jingkong Chen
- Created with: Info-ZIP zip (v3.0)
  - `zip PD.5.empty.zip PD.5.empty`
  - `zip -d PD.5.empty.zip PD.5.empty`

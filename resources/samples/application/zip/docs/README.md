# [⎗](../../../../README.md) `application/zip`

## [CC0.1.json-20231013.zip](../files/CC0.1.json-20231013.zip)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

## [CC0.2.json-split.z01](../files/CC0.2.json-split.z01)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- Modified:
  - by Asher Jingkong Chen
  - with Info-ZIP unzip (v6.0) and zip (v3.0):
    - `unzip -d dir CC0.1.json-20231013.zip`
    - `cp -r dir dis`
    - `cd dis`
    - `zip -9r -s 64k ../CC0.2.json-split.zip .`
  - _NOTE: The associated output file [CC0.2.json-split.zip](../../../../archives/samples/application/zip/CC0.2.json-split.zip) is archived_
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

## [CC0.3.json-split-fixed.zip](../files/CC0.3.json-split-fixed.zip)

- License: [Public Domain, CC0 1.0](./LICENSE.1.txt)
- Original Author(s): Sean Leary
- Modified:
  - by Asher Jingkong Chen
  - with Info-ZIP zip (v3.0):
    - `unzip -d dir CC0.1.json-20231013.zip`
    - `cp -r dir dis`
    - `cd dis`
    - `zip -9r -s 64k ../CC0.2.json-split.zip .`
    - `cd ..`
    - `zip -F CC0.2.json-split.zip --out CC0.3.json-split-fixed.zip`
  - _NOTE: The associated output file [CC0.2.json-split.zip](../../../../archives/samples/application/zip/CC0.2.json-split.zip) is archived_
- References and Sources:
  - [Maven - org.json](https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)

## [CC0.4.zip](../files/CC0.4.zip)

- License: [CC0 1.0](./LICENSE.2.txt)
- Original Author(s): Asher Jingkong Chen
- Created with: Info-ZIP unzip (v6.0) and zip (v3.0)
  - `zip -9r CC0.4.zip CC0.4`

## [CC0.5.empty.zip](../files/CC0.5.empty.zip)

- License: [CC0 1.0](./LICENSE.2.txt)
- Original Author(s): Asher Jingkong Chen
- Created with: Info-ZIP zip (v3.0)
  - `zip CC0.5.empty.zip CC0.5.empty`
  - `zip -d CC0.5.empty.zip CC0.5.empty`

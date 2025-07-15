# Detect Gaming Platform

This behavior pack detects whether a player is on PC, Console, or Mobile and assigns a scoreboard value so you can use the scores target selector argument in your own commands.

## Installing the pack:

You may dowload the latest release from the [Releases Page](https://github.com/mittens4all/Detect-Gaming-Platform/releases)

Add the Detect Gaming Platform add-on to your behavior packs on your world. Behavior packs may disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail)

## How to Use

There is one scoreboard objective:
`detect:platform`

You can target players using the scores selector argument in your commands:

```yaml
# Target players who are on PC
execute as @a[scores={detect:platform=1}] run say I am on PC
```

```yaml
# Target players who are on Console
execute as @a[scores={detect:platform=2}] run say I am on Console
```

```yaml
# Target players who are on Mobile
execute as @a[scores={detect:platform=3}] run say I am on Mobile
```

```yaml
# Target players who are on an undetermined gaming platofrm
execute as @a[scores={detect:platform=4}] run say the game cannot determine my gaming platform
```

```yaml
# Titleraw actionbar
titleraw @a actionbar {"rawtext":[{"translate":"%%%%s","with":{"rawtext":[{"score":{"name":"*","objective":"detect:platform"}}, {"text":"PC"}, {"text":"Console"}, {"text":"Mobile"}, {"text":"Undetermined"}]}}]}
```

## Author

- [@mittens4all](https://www.github.com/mittens4all)
- [Youtube](https://www.youtube.com/@mittens4all)

## Gratitudes

- [jeanmajid](https://github.com/jeanmajid) For being a Bedrock Add-on Dev Pro

```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```
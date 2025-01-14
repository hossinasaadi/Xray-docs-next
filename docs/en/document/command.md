# Command Parameters

::: tip
Xray uses Go-style commands and parameters
:::

## Get Basic Commands

You can run `xray help`to get the most basic usage of all xray, as well as available commands and instructions.

```
Xray is a platform for building proxies.

Usage:

        xray <command> [arguments]

The commands are:

        run          Run Xray with config, the default command
        version      Show current version of Xray
        api          Call an API in an Xray process
        tls          TLS tools
        uuid         Generate new UUIDs

Use "xray help <command>" for more information about a command.
```

### xray run

Specify one or more configuration files and run.

Usage:

```
 xray run [-c config.json] [-confdir dir]
```

```
Run Xray with config, the default command.

The -config=file, -c=file flags set the config files for
Xray. Multiple assign is accepted.

The -confdir=dir flag sets a dir with multiple json config

The -format=json flag sets the format of config files.
Default "json".

The -test flag tells Xray to test config files only,
without launching the server
```

### xray version

Output Xray version, Golang version and other information.

Usage:

```
 xray version
```

### xray api

To call Xray's gRPC API, it needs to be enabled in the configuration file.

Usage:

```
xray api <command> [arguments]
```

```
        restartlogger Restart the logger
        stats         Get statistics
        statsquery    Query statistics
        statssys      Get system statistics
        adi           Add inbounds
        ado           Add outbounds
        rmi           Remove inbounds
        rmo           Remove outbounds
```

### xray tls

Some tools related to TLS.

Usage:

```
xray tls <command> [arguments]
```

```
        cert         Generate TLS certificates
        ping         Ping the domain with TLS handshake
```

### xray uuid

Generated UUID.

Usage:

```
xray uuid
```

::: tip
When `-config` is not specified, Xray will try to load `config.json` from the following paths:

- Working Directory
- The path specified by `Xray.location.asset` in the [environment variable](../config/features/env.md).
  :::

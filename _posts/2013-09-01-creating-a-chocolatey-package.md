---
title: "Creating a Chocolatey package"
tags: ["Code", "Chocolatey"]
layout: post
comments: true
external-url: false
---

I recently "converted" all of my installed apps over to using Chocolatey. I won't dwelve too deeply into how much I love it, but let's just say it's a lot. It's such a relief not having to hunt for executable files. There were packages for nearly all of the apps I use but some were missing so I added a few of them. The process is pretty straightforward.

Let's say we have an app that's called `MyAwesomeApp`. First we need to create a directory called `myawesomeapp` and then create a `nuspec` file in it with the following content:

    <?xml version="1.0"?>
    <package xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <metadata>
        <id>myawesomeapp</id>
        <title>MyAwesomeApp</title>
        <version>1.0</version>
        <authors>The creator's name</authors>
        <owners>Your name</owners>
        <summary>An awesome app</summary>
        <description>An incredible awesome app that'll one day save the world!</description>
        <projectUrl>http://example.com/</projectUrl>
        <tags>awesome awesome awesome</tags>
        <licenseUrl>http://example.com/license.html</licenseUrl>
        <requireLicenseAcceptance>false</requireLicenseAcceptance>
        <iconUrl>http://example.com/logo.png</iconUrl>
        <releaseNotes>http://example.com/news/</releaseNotes>
      </metadata>
      <files>
        <file src="tools\*" target="tools" />
      </files>
    </package>

Then it's time to create a `chocolateyInstall.ps1` file and save it in another directory inside the `myawesomeapp` directory called `tools`. Now, we could technically do it as simple as this:

    Install-ChocolateyPackage "MyAwesomeApp" "exe" "/quiet" "http://example.com/download/installer.exe"

But I like adding a bit more functionality so instead we'll use this:

    $Package = "MyAwesomeApp"
    $PackageParams = @{
      packageName = $Package;  
      fileType = "exe";
      silentArgs = "/quiet";
      url = "http://example.com/download/installer.exe";
    } 

    Try {
      Install-ChocolateyPackage @PackageParams
      Write-ChocolateySuccess $Package
    } Catch {
      Write-ChocolateyFailure $Package "$($_.Exception.Message)"
      Throw
    }

This feels a bit nicer and it's a hell of a lot easier to re-use, atleast for me. After this we need to run `cpack` in the root directory to create a `nupkg` file and then `cinst myawesomeapp -source %cd%` to test it. The last thing we need to do is to upload the generated `nupkg` file on the official [Chocolatey](http://chocolatey.org/) website. You could do this straight from the PowerShell, but I haven't done that yet.

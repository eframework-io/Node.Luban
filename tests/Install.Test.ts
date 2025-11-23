// Copyright (c) 2025 EFramework Innovation. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import { XEnv, XFile, XTest } from "io.eframework.unite.utility"
import { Install } from "../src/Install"

XTest.Test("Install Toolchains", async () => {
    XFile.DeleteDirectory(XEnv.LocalPath)
    XFile.CreateDirectory(XEnv.LocalPath)
    await Install.Process(["--install=3.12.0", "--gitproxy=https://ghproxy.net/"]) // Install specified version.
})
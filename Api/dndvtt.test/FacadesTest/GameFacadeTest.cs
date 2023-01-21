﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using dndvtt.api.Facades;
using Newtonsoft.Json;

namespace dndvtt.api.test.FacadesTest
{
    internal class GameFacadeTest
    {
        GameFacade _sut = new GameFacade();
        Dictionary<string, string> testConfig;

        public GameFacadeTest() {
            var testConfigPath = Path.Combine(Directory.GetCurrentDirectory(), "../../../ConfigJsonFiles/GameFacadeTestConfig.json");
            testConfig = JsonConvert.DeserializeObject<Dictionary<string, string>>(File.ReadAllText(testConfigPath));
        }

        [Test]
        public void configurationReading_shouldConstructFacadeWithCorrectConfigurationFromJson()
        {
            Assert.IsNotNull( _sut );
            Assert.That(_sut.lastBoardFileName, Is.EqualTo(testConfig["lastBoardFileName"]));
        }
    }
}
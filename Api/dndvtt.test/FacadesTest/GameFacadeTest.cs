using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using dndvtt.api.Services.Facades;
using Newtonsoft.Json;

namespace dndvtt.api.test.FacadesTest
{
    internal class GameFacadeTest
    {
        Dictionary<string, string> testConfig;

        public GameFacadeTest() {
            var testConfigPath = Path.Combine(Directory.GetCurrentDirectory(), "../../../ConfigJsonFiles/GameFacadeTestConfig.json");
            testConfig = JsonConvert.DeserializeObject<Dictionary<string, string>>(File.ReadAllText(testConfigPath));
        }

        [Test]
        public void configurationReading_shouldConstructFacadeWithCorrectConfigurationFromJson()
        {
        }
    }
}

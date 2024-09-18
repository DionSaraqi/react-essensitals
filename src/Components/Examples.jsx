import { CORE_CONCEPTS } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data-with-examples";
import { useState } from "react";
import Tabs from "./Tabs";

export default function Example() {
  const [selected, setSelected] = useState();

  function handleSelect(clickedButton) {
    const activeTab = clickedButton.toLowerCase();
    setSelected(activeTab);
  }
  let tabContent = <p>Please select a topic!</p>;
  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {CORE_CONCEPTS.map((item) => (
              <TabButton
                isActive={selected === item.title.toLowerCase()}
                key={item.title}
                onClick={() => handleSelect(item.title)}
              >
                {item.title}
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

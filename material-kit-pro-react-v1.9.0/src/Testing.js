import React, { useState } from "react";
import Rectangle from "views/Rectangle/Rectangle";
import Ellipse from "views/Ellipse/Ellipse";

function Testing() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Rectangle>
        <h3>Heading</h3>
      </Rectangle>
      <Ellipse
        image="https://www.knacktraining.com/wp-content/uploads/2019/01/Illustration.png"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default Testing;

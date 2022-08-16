import React from "react";
import "./childHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faGlobe,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const ChildHeader = () => {
  return (
    <nav>
      <div className="Child-header">
        <ul>
          <li>
            <a href="/aaa">
              <span> Turkish Airlines Holidays </span>
            </a>
          </li>

          <li>
            <a href="/aaa">Corporate Club</a>
          </li>
          <li>
            <a href="/aaa">Miles&amp;Smiles</a>
          </li>
          <li>
            <a href="/aaa">
              <i>
                <FontAwesomeIcon icon={faComment} />
              </i>
              Geri Bildirim
            </a>
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
            <a href="/aaa">Ara</a>
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faGlobe} />{" "}
            </i>
            TR - TR
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ChildHeader;

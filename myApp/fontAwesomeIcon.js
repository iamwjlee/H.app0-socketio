import Vue from "vue"; 

// ��ġ�ߴ� fontawesome-svg-core�� vue-fontawesome 
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 

// ��ġ�ߴ� ���������Ͽ��� �ش� �����ܸ� �ҷ��ɴϴ�. 
import { faLink, faRedo, faUndo } from "@fortawesome/free-solid-svg-icons"; 
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"; 

// �ҷ��� �������� ���̺귯���� ����ϴ�. 
library.add(faTrashAlt); 
library.add(faLink, faRedo, faUndo); 

// fontawesome�������� Vue���ø��� ����� �� �ְ� ����� �ݴϴ�. 

Vue.component("font-awesome-icon", FontAwesomeIcon);


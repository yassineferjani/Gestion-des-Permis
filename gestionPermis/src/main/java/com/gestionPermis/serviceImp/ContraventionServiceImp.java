package com.gestionPermis.serviceImp;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.gestionPermis.dao.ContraventionRepository;
import com.gestionPermis.dao.PermisRepository;
import com.gestionPermis.exceptions.ConducteurNotFoundException;
import com.gestionPermis.exceptions.PermisNotFoundException;
import com.gestionPermis.exceptions.PointsinsufficientException;
import com.gestionPermis.models.Contravention;
import com.gestionPermis.models.Permis;
import com.gestionPermis.services.ContraventionService;
@Service
public class ContraventionServiceImp implements ContraventionService {
	
	@Autowired
	private ContraventionRepository contraventionRepository;
	@Autowired
	private PermisRepository permisRepository;

	
	@Override
	public List<Contravention> listContravention() {
		return contraventionRepository.findAll();
	}

	@Override
	public Contravention getContravention(Long id) {
		return contraventionRepository.findById(id).orElseThrow(()-> new ConducteurNotFoundException());
	}

	

	@Override
	public void updateContravention(Contravention contravention) {
		Permis permis = permisRepository.findById(c.getPermis().getId()).orElseThrow(()-> new PermisNotFoundException());
		if (permis == null) {
			throw new PermisNotFoundException();
			}
		Contravention contravention = contraventionRepository.findById(c.getId()).orElseThrow(()-> new ContraventionNotFoundException());
		if(permis.getPoints()+contravention.getRetaitPoints()>= c.getRetaitPoints()) {
			permis.setPoints(permis.getPoints()+contravention.getRetaitPoints() - c.getRetaitPoints());
			contraventionRepository.save(c);
			permisRepository.save(permis);
			
		}else {
			throw new PointsinsufficientException();
		}
		
	}

	@Override
	public void deleteContravention(Long id) {
		contraventionRepository.deleteById(id);
	}

	@Override
	public void addContravention(Contravention c)  {
		Permis permis = permisRepository.findById(c.getPermis().getId()).orElseThrow(()-> new PermisNotFoundException());
		if (permis == null) {
			throw new PermisNotFoundException();
			}
		if(permis.getPoints()>= c.getRetaitPoints()) {
			permis.setPoints(permis.getPoints() - c.getRetaitPoints());
			contraventionRepository.save(c);
			permisRepository.save(permis);
			
		}else {
			throw new PointsinsufficientException();
		}
		

		
	}

	
}
	
	



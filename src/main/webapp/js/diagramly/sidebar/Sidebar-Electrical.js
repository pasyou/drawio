(function()
{
  // Adds electrical stencils
  Sidebar.prototype.addElectricalPalette = function()
  {
    var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;shadow=0;dashed=0;align=center;html=1;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_SHAPE;
    var mea = s + '=mxgraph.electrical.abstract.';
    var mec = 'pointerEvents=1;' + s + '=mxgraph.electrical.capacitors.';
    var med = 'pointerEvents=1;fillColor=strokeColor;' + s + '=mxgraph.electrical.diodes.';
    var mei = 'pointerEvents=1;' + s + '=mxgraph.electrical.inductors.';
    var mem = 'pointerEvents=1;' + s + '=mxgraph.electrical.miscellaneous.';
    var meem = 'pointerEvents=1;' + s + '=mxgraph.electrical.electro-mechanical.';
    var mel = s + '=mxgraph.electrical.logic_gates.';
    var mef1 = s + '=mxgraph.electrical.mosfets1.';
    var mef2 = s + '=mxgraph.electrical.mosfets2.';
    var met = s + '=mxgraph.electrical.transistors.';
    var meoe = s + '=mxgraph.electrical.opto_electronics.';
    var mep = 'pointerEvents=1;' + s + '=mxgraph.electrical.plc_ladder.';
    var mer = s + '=mxgraph.electrical.radio.';
    var mere = 'pointerEvents=1;' + s + '=mxgraph.electrical.resistors.';
    var mess = 'pointerEvents=1;' + s + '=mxgraph.electrical.signal_sources.';
    var metd = s + '=mxgraph.electrical.thermionic_devices.';
    var mew = 'pointerEvents=1;' + s + '=mxgraph.electrical.waveforms.';
    var mein = 'perimeter=ellipsePerimeter;' + s + '=mxgraph.electrical.instruments.';
    var meiecl = s + '=mxgraph.electrical.iec_logic_gates.';
    var merm = s + '=mxgraph.electrical.rot_mech.';
    var metr = s + '=mxgraph.electrical.transmission.';
    var gnmel = 'mxgraph.electrical.logic_gates';
    var dtmel = 'electrical logic gate ';
    var gnmeiecl = 'mxgraph.electrical.iec_logic_gates';
    var dtmeiecl = 'electrical iec logic gate ';
    var gnmere = 'mxgraph.electrical.resistors';
    var dtmere = 'electrical resistor ';
    var gnmec = 'mxgraph.electrical.capacitors';
    var dtmec = 'electrical capacitor ';
    var gnmei = 'mxgraph.electrical.inductors';
    var dtmei = 'electrical inductor ';
    var gnmeem = 'mxgraph.electrical.electro-mechanical';
    var dtmeem = 'electrical switch relay ';
    var gnmed = 'mxgraph.electrical.diodes';
    var dtmed = 'electrical diode ';
    var gnmess = 'mxgraph.electrical.signal_sources';
    var dtmess = 'electrical signal source ';
    var gnmet = 'mxgraph.electrical.transistors';
    var dtmet = 'electrical transistor ';
    var gnmein = 'mxgraph.electrical.instruments';
    var dtmein = 'electrical instrument ';
    var gnmer = 'mxgraph.electrical.radio';
    var dtmer = 'electrical radio audio ';
    var gnmem = 'mxgraph.electrical.miscellaneous';
    var dtmem = 'electrical ';
    var gnmea = 'mxgraph.electrical.abstract';
    var dtmea = 'electrical ';
    var gnmep = 'mxgraph.electrical.plc_ladder';
    var dtmep = 'electrical plc ladder programmable logic logical controller';
    var gnmeoe = 'mxgraph.electrical.opto_electronics';
    var dtmeoe = 'electrical optical ';
    var gnmetd = 'mxgraph.electrical.thermionic_devices';
    var dtmetd = 'electrical thermionic thermo device vacuum tube ';
    var gnmew = 'mxgraph.electrical.waveforms';
    var dtmew = 'electrical waveform signal ';
    var gnmerm = 'mxgraph.electrical.rot_mech';
    var dtmerm = 'electrical rotating equipment mechanical function functions';
    var gnmetr = 'mxgraph.electrical.transmission';
    var dtmetr = 'electrical transmission paths bus buses';

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\LogicGates');

    this.addPaletteFunctions('electrical\LogicGates', 'Electrical / Logic Gates', false,
    [
    	this.createVertexTemplateEntry(mel + 'logic_gate;operation=and;', 100, 60, '', 'AND', null, null, this.getTagsForStencil(gnmel, 'and', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'buffer2;', 100, 60, '', 'Buffer', null, null, this.getTagsForStencil(gnmel, 'buffer', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'd_type_flip-flop;', 100, 80, '', 'D Type Flip-Flop', null, null, this.getTagsForStencil(gnmel, 'd_type_flip-flop', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'd_type_flip-flop_with_clear_2;', 100, 90, '', 'D Type Flip-Flop With Clear', null, null, this.getTagsForStencil(gnmel, 'd_type_flip-flop_with_clear', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'd_type_rs_flip-flop;', 100, 100, '', 'D Type RS Flip-Flop', null, null, this.getTagsForStencil(gnmel, 'd_type_rs_flip-flop', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'inverter_2', 100, 60, '', 'Inverter', null, null, this.getTagsForStencil(gnmel, 'inverter', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'inverting_contact;', 10, 10, '', 'Inverting Contact', null, null, this.getTagsForStencil(gnmel, 'inverting_contact', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'jk_flip-flop;', 100, 80, '', 'JK Flip-Flop', null, null, this.getTagsForStencil(gnmel, 'jk_flip-flop', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'jk_flip-flop_with_clear_2;', 100, 90, '', 'JK Flip-Flop With Clear', null, null, this.getTagsForStencil(gnmel, 'jk_flip-flop_with_clear', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'jk_flip-flop_with_sr;', 100, 100, '', 'JK Flip-Flop With SR', null, null, this.getTagsForStencil(gnmel, 'jk_flip-flop_with_sr', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'logic_gate;operation=and;negating=1;negSize=0.15;', 100, 60, '', 'NAND', null, null, this.getTagsForStencil(gnmel, 'nand not and', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'logic_gate;operation=or;', 100, 60, '', 'OR', null, null, this.getTagsForStencil(gnmel, 'or', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'logic_gate;operation=or;negating=1;negSize=0.15;', 100, 60, '', 'NOR', null, null, this.getTagsForStencil(gnmel, 'nor', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'rs_latch;', 100, 80, '', 'RS Latch', null, null, this.getTagsForStencil(gnmel, 'rs_latch', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'synchronous_rs_latch;', 100, 80, '', 'RS Latch (Synchronous)', null, null, this.getTagsForStencil(gnmel, 'synchronous_rs_latch', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'schmitt_trigger;', 100, 60, '', 'Schmitt Trigger', null, null, this.getTagsForStencil(gnmel, 'schmitt_trigger', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 't_type_flip-flop;', 100, 80, '', 'T Type Flip-Flop', null, null, this.getTagsForStencil(gnmel, 't_type_flip-flop', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'logic_gate;operation=xor;', 100, 60, '', 'XOR', null, null, this.getTagsForStencil(gnmel, 'xor', dtmel).join(' ')),
    	this.createVertexTemplateEntry(mel + 'logic_gate;operation=xor;negating=1;negSize=0.15;', 100, 60, '', 'XNOR', null, null, this.getTagsForStencil(gnmel, 'xnor', dtmel).join(' ')),
    	this.createVertexTemplateEntry(meiecl + 'and;', 60, 80, '', 'AND (IEC)', null, null, this.getTagsForStencil(gnmeiecl, 'and', dtmeiecl).join(' ')),
    	this.createVertexTemplateEntry(meiecl + 'nand_2;', 66, 80, '', 'NAND (IEC)', null, null, this.getTagsForStencil(gnmeiecl, 'nand', dtmeiecl).join(' ')),
    	this.createVertexTemplateEntry(meiecl + 'or;', 60, 80, '', 'OR (IEC)', null, null, this.getTagsForStencil(gnmeiecl, 'or', dtmeiecl).join(' ')),
    	this.createVertexTemplateEntry(meiecl + 'nor_2;', 66, 80, '', 'NOR (IEC)', null, null, this.getTagsForStencil(gnmeiecl, 'nor', dtmeiecl).join(' ')),
    	this.createVertexTemplateEntry(meiecl + 'not_2;', 66, 80, '', 'NOT (IEC)', null, null, this.getTagsForStencil(gnmeiecl, 'xor', dtmeiecl).join(' ')),
    	this.createVertexTemplateEntry(meiecl + 'xor;', 60, 80, '', 'XOR (IEC)', null, null, this.getTagsForStencil(gnmeiecl, 'xor', dtmeiecl).join(' ')),
    	this.createVertexTemplateEntry(
    			'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.logic_gates.dual_inline_ic;labelNames=a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;',
    			100, 200, 'IC', 'Dual In-Line IC', null, null, this.getTagsForStencil(gnmel, 'dual inline in line ic integrated circuit', dtmel).join(' ')),
    	this.createVertexTemplateEntry(
    			'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.logic_gates.qfp_ic;' +
    			'labelNames=a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,b1,c1,d1,e1,f1,g1,h1,i1,j1,k1,l1,m1,n1;',
    			200, 200, 'IC', 'Quad Flat Package IC', null, null, this.getTagsForStencil(gnmel, 'quad flat package qfp ic integrated circuit', dtmel).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Resistors');

    this.addPaletteFunctions('electrical\Resistors', 'Electrical / Resistors', false,
    [
    	this.createVertexTemplateEntry(mere + 'resistor_1;',
    			100, 20, '', 'Resistor', null, null, this.getTagsForStencil(gnmere, 'resistor_1', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'resistor_2;',
    			100, 20, '', 'Resistor', null, null, this.getTagsForStencil(gnmere, 'resistor_2', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'potentiometer_1;',
    			100, 40, '', 'Potentiometer', null, null, this.getTagsForStencil(gnmere, 'potentiometer_1', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'potentiometer_2;',
    			100, 40, '', 'Potentiometer', null, null, this.getTagsForStencil(gnmere, 'potentiometer_2', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'trimmer_pot_1;',
    			100, 40, '', 'Potentiometer (Trimmer)', null, null, this.getTagsForStencil(gnmere, 'trimmer_pot_1', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'trimmer_pot_2;',
    			100, 40, '', 'Potentiometer (Trimmer)', null, null, this.getTagsForStencil(gnmere, 'trimmer_pot_2', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'trimmer_resistor_1;',
    			100, 65.5, '', 'Resistor (Trimmer)', null, null, this.getTagsForStencil(gnmere, 'trimmer_resistor_1', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'trimmer_resistor_2;',
    			100, 65.5, '', 'Resistor (Trimmer)', null, null, this.getTagsForStencil(gnmere, 'trimmer_resistor_2', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'variable_resistor_1;',
    			100, 60, '', 'Resistor (Variable)', null, null, this.getTagsForStencil(gnmere, 'variable_resistor_1', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'variable_resistor_2;',
    			100, 60, '', 'Resistor (Variable)', null, null, this.getTagsForStencil(gnmere, 'variable_resistor_2', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'resistor_with_instrument_or_relay_shunt;',
    			100, 20, '', 'Resistor (Instrument/Relay Shunt)', null, null, this.getTagsForStencil(gnmere, 'resistor_with_instrument_or_relay_shunt', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'attenuator;',
    			100, 60, '', 'Attenuator', null, null, this.getTagsForStencil(gnmere, 'attenuator', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'resistor,_adjustable_contact;',
    			100, 40, '', 'Resistor (Adjustable Contact)', null, null, this.getTagsForStencil(gnmere, 'resistor,_adjustable_contact', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'resistor,_shunt;',
    			100, 45, '', 'Resistor (Shunt)', null, null, this.getTagsForStencil(gnmere, 'resistor,_shunt', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'symmetrical_varistor;',
    			100, 60, '', 'Varistor (Symmetrical)', null, null, this.getTagsForStencil(gnmere, 'symmetrical_varistor', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'tapped_resistor;',
    			100, 40, '', 'Resistor (Tapped)', null, null, this.getTagsForStencil(gnmere, 'tapped_resistor', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'nonlinear_resistor;',
    			100, 60, '', 'Resistor (Nonlinear)', null, null, this.getTagsForStencil(gnmere, 'nonlinear_resistor', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'memristor_1;',
    			100, 20, '', 'Memristor', null, null, this.getTagsForStencil(gnmere, 'memristor_1', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'memristor_2;',
    			100, 24, '', 'Memristor', null, null, this.getTagsForStencil(gnmere, 'memristor_2', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'magnetoresistor;',
    			100, 60, '', 'Magnetoresistor', null, null, this.getTagsForStencil(gnmere, 'magnetoresistor', dtmere).join(' ')),
    	this.createVertexTemplateEntry(mere + 'symmetrical_photoconductive_transducer;',
    			100, 40, '', 'Photoconductive Transducer (Symmetrical)', null, null, this.getTagsForStencil(gnmere, 'symmetrical_photoconductive_transducer', dtmere).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Capacitors');

    this.addPaletteFunctions('electrical\Capacitors', 'Electrical / Capacitors', false,
    [
    	this.createVertexTemplateEntry(mec + 'capacitor_1;',
    			100, 60, '', 'Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'capacitor_1', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'capacitor_2;',
    			100, 60, '', 'Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'capacitor_2', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'capacitor_3;',
    			100, 60, '', 'Electrolytic Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'capacitor_3', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'capacitor_4;',
    			100, 60, '', 'Capacitor (UK)', null, null, this.getTagsForStencil(gnmec, 'capacitor_4', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'capacitor_5;',
    			100, 60, '', 'Electrolytic Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'capacitor_5', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'capacitor_6;',
    			100, 60, '', 'Capacitor', null, null, this.getTagsForStencil(gnmec, 'capacitor_6', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'differential_capacitor;',
    			100, 80, '', 'Differential Capacitor', null, null, this.getTagsForStencil(gnmec, 'differential_capacitor', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'trimmer_capacitor_1;',
    			100, 65.5, '', 'Tuning Variable Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'trimmer_capacitor_1', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'trimmer_capacitor_2;',
    			100, 65.5, '', 'Tuning Variable Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'trimmer_capacitor_2', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'variable_capacitor_1;',
    			100, 60, '', 'Trimmer Variable Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'variable_capacitor_1', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'variable_capacitor_2;',
    			100, 60, '', 'Trimmer Variable Capacitor (US)', null, null, this.getTagsForStencil(gnmec, 'variable_capacitor_2', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'feed_through_capacitor;',
    			100, 90, '', 'Feed Through Capacitor', null, null, this.getTagsForStencil(gnmec, 'feed_through_capacitor', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'ganged_capacitor;',
    			100, 130, '', 'Ganged Capacitor', null, null, this.getTagsForStencil(gnmec, 'ganged_capacitor', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'multiple_capacitor;',
    			100, 130, '', 'Multiple Capacitor', null, null, this.getTagsForStencil(gnmec, 'multiple_capacitor', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'multiple_electrolytic_capacitor_comm_neg;',
    			100, 130, '', 'Multiple Electrolytic Capacitor (Common Negative)', null, null, this.getTagsForStencil(gnmec, 'multiple_electrolytic_capacitor_comm_neg', dtmec).join(' ')),
    	this.createVertexTemplateEntry(mec + 'multiple_electrolytic_capacitor_comm_pos;',
    			100, 130, '', 'Multiple Electrolytic Capacitor (Common Positive)', null, null, this.getTagsForStencil(gnmec, 'multiple_electrolytic_capacitor_comm_pos', dtmec).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Inductors');

    this.addPaletteFunctions('electrical\Inductors', 'Electrical / Inductors', false,
    [
    	this.createVertexTemplateEntry(mei + 'inductor_3;',
    			100, 8, '', 'Inductor (Air Core)', null, null, this.getTagsForStencil(gnmei, 'inductor_3', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'inductor_5;',
    			100, 14, '', 'Inductor (Air Core)', null, null, this.getTagsForStencil(gnmei, 'inductor_5', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'inductor_1;',
    			100, 15, '', 'Inductor (Air Core)', null, null, this.getTagsForStencil(gnmei, 'inductor_1', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'variable_inductor;',
    			100, 60, '', 'Variable', null, null, this.getTagsForStencil(gnmei, 'variable_inductor', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'ferrite_core;',
    			64, 4, '', 'Ferrite Core', null, null, this.getTagsForStencil(gnmei, 'ferrite_core', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'iron_core;',
    			64, 4, '', 'Iron Core', null, null, this.getTagsForStencil(gnmei, 'iron_core', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'magnetic_core;direction=north;',
    			64, 3, '', 'Magnetic Core', null, null, this.getTagsForStencil(gnmei, 'magnetic core', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'transformer_1;',
    			64, 60, '', 'Transformer (Iron Core)', null, null, this.getTagsForStencil(gnmei, 'transformer_1', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'transformer_2;',
    			64, 60, '', 'Transformer (Iron Core)', null, null, this.getTagsForStencil(gnmei, 'transformer_2', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'half_inductor;',
    			32, 23, '', 'Half Inductor', null, null, this.getTagsForStencil(gnmei, 'half inductor', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'transformer;direction=north;',
    			64, 64, '', 'Transformer', null, null, this.getTagsForStencil(gnmei, 'transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'inductor;',
    			100, 42, '', 'Inductor', null, null, this.getTagsForStencil(gnmei, 'inductor', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'choke;',
    			100, 200, '', 'Choke', null, null, this.getTagsForStencil(gnmei, 'choke', dtmei).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=top;shadow=0;dashed=0;align=center;fillColor=#000000;html=1;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.electrical.inductors.variometer;',
    			150, 88, '', 'Variometer', null, null, this.getTagsForStencil(gnmei, 'variometer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'coaxial_choke;',
    			300, 50, '', 'Coaxial Choke', null, null, this.getTagsForStencil(gnmei, 'coaxial choke', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'transductor;',
    			200, 100, '', 'Transductor', null, null, this.getTagsForStencil(gnmei, 'transductor', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'saturating_transformer;',
    			200, 150, '', 'Saturating Transformer', null, null, this.getTagsForStencil(gnmei, 'saturating_transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'potential_transformer_2;',
    			92, 40, '', 'Potential Transformer', null, null, this.getTagsForStencil(gnmei, 'potential transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'pot_trans_3_windings;',
    			67, 96, '', 'Pot. Trans. 3 Windings', null, null, this.getTagsForStencil(gnmei, 'potential transformer 3 three windings', dtmei).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.signal_sources.current_source;',
    			40, 60, '', 'Transformer', null, null, this.getTagsForStencil(gnmei, '', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'adjustable_transformer;',
    			46, 60, '', 'Adjustable Transformer', null, null, this.getTagsForStencil(gnmei, 'adjustable_transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + '1_phase_induction_volt_reg;',
    			100, 100, '', '1-Phase Induction Voltage Regulator', null, null, this.getTagsForStencil(gnmei, '1 phase induction voltage regulator monophase', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'triplex_induction_volt_reg;',
    			100, 100, '', 'Triplex Induction Voltage Regulator', null, null, this.getTagsForStencil(gnmei, 'triplex induction voltage regulator', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'induction_voltage_regulator;',
    			160, 210, '', 'Induction Voltage Regulator', null, null, this.getTagsForStencil(gnmei, 'induction voltage regulator', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'current_transformer_1;',
    			12, 75, '', 'Current Transformer', null, null, this.getTagsForStencil(gnmei, 'current transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'current_transformer_2;',
    			125, 175, '', 'Current Transformer', null, null, this.getTagsForStencil(gnmei, 'current transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'current_transformer_3;',
    			75, 10, '', 'Current Transformer', null, null, this.getTagsForStencil(gnmei, 'current transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'potential_transformer;',
    			100, 50, '', 'Potential Transformer', null, null, this.getTagsForStencil(gnmei, 'potential transformer', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'outdoor_metering_device;',
    			100, 100, '', 'Outdoor Metering Device', null, null, this.getTagsForStencil(gnmei, 'outdoor metering device', dtmei).join(' ')),
    	this.createVertexTemplateEntry(mei + 'linear_coupler;',
    			80, 20, '', 'Linear Coupler', null, null, this.getTagsForStencil(gnmei, 'linear coupler', dtmei).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\SwitchesRelays');

    this.addPaletteFunctions('electrical\SwitchesRelays', 'Electrical / Switches and Relays', false,
    [
    	this.createVertexTemplateEntry(meem + '2-way_switch;',
    			75, 26, '', 'SPDT', null, null, this.getTagsForStencil(gnmeem, '2-way switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'push_switch_nc;',
    			75, 10, '', 'Pushbutton NC', null, null, this.getTagsForStencil(gnmeem, 'push switch nc', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'push_switch_no;',
    			75, 19, '', 'Pushbutton NO', null, null, this.getTagsForStencil(gnmeem, 'push switch no', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'simple_switch;',
    			75, 19, '', 'SPST', null, null, this.getTagsForStencil(gnmeem, 'simple switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'switch_disconnector;',
    			75, 19, '', 'Switch Disconnector', null, null, this.getTagsForStencil(gnmeem, 'switch disconnector', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'fuse;',
    			75, 16, '', 'Fuse', null, null, this.getTagsForStencil(gnmeem, 'fuse', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'liquid_level_actuated;',
    			75, 28, '', 'Liquid Level Actuated', null, null, this.getTagsForStencil(gnmeem, 'liquid level actuated', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'liquid_level_actuated_2;',
    			75, 32, '', 'Liquid Level Actuated', null, null, this.getTagsForStencil(gnmeem, 'liquid level actuated', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'gas_flow_actuated;',
    			75, 32, '', 'Gas Flow Actuated', null, null, this.getTagsForStencil(gnmeem, 'gas flow actuated', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'flow_actuated;',
    			75, 31, '', 'Flow Actuated', null, null, this.getTagsForStencil(gnmeem, 'flow actuated', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'pressure_actuated;',
    			75, 31, '', 'Pressure Actuated', null, null, this.getTagsForStencil(gnmeem, 'pressure actuated', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'temperature_actuated;',
    			75, 31, '', 'Temperature Actuated', null, null, this.getTagsForStencil(gnmeem, 'temperature actuated', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'safety_interlock;',
    			75, 37, '', 'Safety Interlock', null, null, this.getTagsForStencil(gnmeem, 'safety interlock', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'temperature_switch;',
    			75, 18, '', 'Temperature Switch', null, null, this.getTagsForStencil(gnmeem, 'temperature switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=top;shadow=0;dashed=0;align=center;html=1;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.electrical.electro-mechanical.thermostat;fontSize=10;',
    			75, 7, 'tº', 'Thermostat', null, null, this.getTagsForStencil(gnmeem, 'thermostat', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'limit_switch;',
    			75, 16, '', 'Limit Switch', null, null, this.getTagsForStencil(gnmeem, 'limit switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'circuit_breaker;',
    			75, 20, '', 'Circuit Breaker', null, null, this.getTagsForStencil(gnmeem, 'circuit breaker', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'selector_switch;',
    			75, 66, '', 'Selector Switch', null, null, this.getTagsForStencil(gnmeem, 'selector_switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'shorting_selector;',
    			60, 66, '', 'Shorting Selector', null, null, this.getTagsForStencil(gnmeem, 'shorting selector', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'proximity_limit_switch;',
    			75, 55, '', 'Proximity Limit Switch', null, null, this.getTagsForStencil(gnmeem, 'proximity limit switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'inertia_switch;',
    			75, 19, '', 'Inertia Switch', null, null, this.getTagsForStencil(gnmeem, 'inertia switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'pushbutton_break;',
    			75, 54, '', 'Pushbutton Break', null, null, this.getTagsForStencil(gnmeem, 'pushbutton break', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'manual_switch;',
    			75, 18, '', 'Manual Switch', null, null, this.getTagsForStencil(gnmeem, 'manual switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'make_contact;',
    			75, 16, '', 'Make Contact', null, null, this.getTagsForStencil(gnmeem, 'make contact', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'break_contact;',
    			75, 10, '', 'Break Contact', null, null, this.getTagsForStencil(gnmeem, 'break contact', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'two_way_contact;',
    			75, 30, '', 'Two Way Contact', null, null, this.getTagsForStencil(gnmeem, 'two way contact', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'passing_make_contact;',
    			75, 23, '', 'Passing Make-Contact', null, null, this.getTagsForStencil(gnmeem, 'passing make contact', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'stay_put;',
    			75, 7, '', 'Stay Put', null, null, this.getTagsForStencil(gnmeem, 'stay put', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'dpst;',
    			75, 26, '', 'DPST', null, null, this.getTagsForStencil(gnmeem, 'dpst', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'spring_return;',
    			75, 10, '', 'Spring Return', null, null, this.getTagsForStencil(gnmeem, 'spring return', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'spring_return_2;',
    			75, 19, '', 'Spring Return', null, null, this.getTagsForStencil(gnmeem, 'spring return', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'limit_switch_no;',
    			75, 24, '', 'Limit Switch NO', null, null, this.getTagsForStencil(gnmeem, 'limit switch no normally open', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'limit_switch_nc;',
    			75, 13, '', 'Limit Switch NC', null, null, this.getTagsForStencil(gnmeem, 'limit switch nc normally closed', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'dpdt2;',
    			58, 62, '', 'DPDT', null, null, this.getTagsForStencil(gnmeem, 'dpdt', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + '2_position_switch;',
    			75, 70, '', '2-Position Switch', null, null, this.getTagsForStencil(gnmeem, '2 position switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + '3_position_switch;',
    			60, 60, '', '3-Position Switch', null, null, this.getTagsForStencil(gnmeem, '3 position switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + '4_position_switch;',
    			75, 70, '', '4-Position Switch', null, null, this.getTagsForStencil(gnmeem, '4 position switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'pushbutton_make;',
    			75, 53, '', 'Pushbutton Make', null, null, this.getTagsForStencil(gnmeem, 'pushbutton make', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'pushbutton_2_circuit;',
    			75, 73, '', 'Pushbutton 2-Circuit', null, null, this.getTagsForStencil(gnmeem, 'pushbutton 2 circuit', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'time_delay_make;',
    			75, 31, '', 'Time Delay Make', null, null, this.getTagsForStencil(gnmeem, 'time delay make', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'time_delay_break;',
    			75, 32, '', 'Time Delay Break', null, null, this.getTagsForStencil(gnmeem, 'time delay break', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'time_delay_make_2;',
    			75, 36, '', 'Time Delay Make', null, null, this.getTagsForStencil(gnmeem, 'time delay make', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'time_delay_break_2;',
    			75, 30, '', 'Time Delay Break', null, null, this.getTagsForStencil(gnmeem, 'time delay break', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'isolator;',
    			75, 20, '', 'Isolator', null, null, this.getTagsForStencil(gnmeem, 'isolator', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'changeover_contact;',
    			75, 20, '', 'Changeover Contact', null, null, this.getTagsForStencil(gnmeem, 'changeover contact', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'reed_switch;',
    			75, 20, '', 'Reed Switch', null, null, this.getTagsForStencil(gnmeem, 'reed switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'relay_coil;',
    			70, 35, '', 'Relay Coil', null, null, this.getTagsForStencil(gnmeem, 'relay coil', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'relay;',
    			100, 50, '', 'Relay', null, null, this.getTagsForStencil(gnmeem, 'relay', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'relay_contacts;',
    			30, 24, '', 'Relay Contacts', null, null, this.getTagsForStencil(gnmeem, 'relay contacts', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'resonator;',
    			100, 50, '', 'Resonator', null, null, this.getTagsForStencil(gnmeem, 'resonator', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'pilot_light;',
    			100, 100, '', 'Pilot Light', null, null, this.getTagsForStencil(gnmeem, 'pilot light', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'relay_coil_2;',
    			100, 70, '', 'Relay Coil', null, null, this.getTagsForStencil(gnmeem, 'relay coil', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'mercury_switch;',
    			80, 80, '', 'Mercury Switch', null, null, this.getTagsForStencil(gnmeem, 'mercury switch', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'mercury_switch_2;',
    			50, 90, '', 'Mercury Switch', null, null, this.getTagsForStencil(gnmeem, 'mercury switch', dtmeem).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Diodes');

    this.addPaletteFunctions('electrical\Diodes', 'Electrical / Diodes', false,
    [
    	this.createVertexTemplateEntry(med + 'diode;',
    			100, 60, '', 'PN Diode', null, null, this.getTagsForStencil(gnmed, 'diode', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'gunn_diode;',
    			100, 60, '', 'Gunn Diode', null, null, this.getTagsForStencil(gnmed, 'gunn_diode', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'schottky_diode;',
    			100, 60, '', 'Schottky Diode', null, null, this.getTagsForStencil(gnmed, 'schottky_diode', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'zener_diode_2;',
    			100, 60, '', 'Breakdown', null, null, this.getTagsForStencil(gnmed, 'zener_diode_2', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'tunnel_diode;',
    			100, 60, '', 'Tunnel Diode 1', null, null, this.getTagsForStencil(gnmed, 'tunnel_diode', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'tunnel_diode_2;',
    			100, 80, '', 'Tunnel Diode 2', null, null, this.getTagsForStencil(gnmed, 'tunnel_diode_2', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'field_effect_diode;',
    			100, 60, '', 'Field Effect Diode', null, null, this.getTagsForStencil(gnmed, 'field_effect_diode', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'varactor_-_varicap;',
    			100, 60, '', 'Varactor - Varicap', null, null, this.getTagsForStencil(gnmed, 'varactor_-_varicap', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'zener_diode_1;',
    			100, 60, '', 'Zener Diode 1', null, null, this.getTagsForStencil(gnmed, 'zener_diode_1', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'zener_diode_3;',
    			100, 60, '', 'Zener Diode 2', null, null, this.getTagsForStencil(gnmed, 'zener_diode_3', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'four_layer_diode;',
    			100, 80, '', 'Four Layer Diode', null, null, this.getTagsForStencil(gnmed, 'four_layer_diode', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'transorb_1;',
    			100, 60, '', 'Transorb 1', null, null, this.getTagsForStencil(gnmed, 'transorb_1', dtmed).join(' ')),
    	this.createVertexTemplateEntry(med + 'transorb_2;',
    			100, 60, '', 'Transorb 2', null, null, this.getTagsForStencil(gnmed, 'transorb_2', dtmed).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Sources');

    this.addPaletteFunctions('electrical\Sources', 'Electrical / Sources', false,
    [
    	this.createVertexTemplateEntry(mess + 'ac_source;',
    			60, 60, '', 'AC', null, null, this.getTagsForStencil(gnmess, 'ac_source', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'current_source;',
    			40, 60, '', 'Current', null, null, this.getTagsForStencil(gnmess, 'current_source', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'dc_source_1;',
    			70, 75, '', 'DC', null, null, this.getTagsForStencil(gnmess, 'dc_source_1', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'dc_source_2;',
    			60, 60, '', 'DC', null, null, this.getTagsForStencil(gnmess, 'dc_source_2', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'dc_source_3_v2;',
    			60, 60, '', 'DC', null, null, this.getTagsForStencil(gnmess, 'dc_source_3_v2', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'dependent_source_1;',
    			60, 60, '', 'Dependent', null, null, this.getTagsForStencil(gnmess, 'dependent_source_1', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'dependent_source_2;',
    			60, 60, '', 'Dependent', null, null, this.getTagsForStencil(gnmess, 'dependent_source_2', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'dependent_source_3;',
    			60, 60, '', 'Dependent', null, null, this.getTagsForStencil(gnmess, 'dependent_source_3', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'noise_source;',
    			60, 60, '', 'Noise', null, null, this.getTagsForStencil(gnmess, 'noise_source', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'ideal_source;',
    			60, 60, '', 'Ideal Source', null, null, this.getTagsForStencil(gnmess, 'ideal source', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'explosive_squib',
    			60, 60, '', 'Explosive Squib', null, null, this.getTagsForStencil(gnmess, 'explosive squib', dtmem).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=#000000;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.monocell_battery;',
    			100, 60, '', 'Accumulator / Monocell Battery', null, null, this.getTagsForStencil(gnmess, 'accumulator monocell battery single cell', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'batteryStack;',
    			100, 60, '', 'Battery Stack', null, null, this.getTagsForStencil(gnmess, 'battery stack', dtmess).join(' ')),
    	this.createVertexTemplateEntry('pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=#000000;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.multicell_battery_tapped;',
    			100, 70, '', 'Multicell Battery Tapped', null, null, this.getTagsForStencil(gnmess, 'accumulator multicell battery tapped multi multiple cell', dtmem).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Transistors');

    this.addPaletteFunctions('electrical\Transistors', 'Electrical / Transistors', false,
    [
    	this.createVertexTemplateEntry(met + 'npn_transistor_1;',
    			95, 100, '', 'BJT (NPN)', null, null, this.getTagsForStencil(gnmet, 'npn_transistor_1', dtmet).join(' ')),
    	this.createVertexTemplateEntry(met + 'pnp_transistor_1;',
    			95, 100, '', 'BJT (PNP)', null, null, this.getTagsForStencil(gnmet, 'pnp_transistor_1', dtmet).join(' ')),
    	this.createVertexTemplateEntry(met + 'n-channel_jfet_1;',
    			95, 100, '', 'N Channel JFET', null, null, this.getTagsForStencil(gnmet, 'n-channel_jfet_1', dtmet).join(' ')),
    	this.createVertexTemplateEntry(met + 'p-channel_jfet_1;',
    			95, 100, '', 'P Channel JFET', null, null, this.getTagsForStencil(gnmet, 'p-channel_jfet_1', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'n-channel_mosfet_1;',
    			95, 100, '', 'MOSFET (N)', null, null, this.getTagsForStencil(gnmet, 'n-channel_mosfet_1', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'p-channel_mosfet_1;',
    			95, 100, '', 'MOSFET (P)', null, null, this.getTagsForStencil(gnmet, 'p-channel_mosfet_1', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'mosfet_ic_n;',
    			95, 100, '', 'NMOS', null, null, this.getTagsForStencil(gnmet, 'mosfet_ic_n', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'mosfet_ic_p;',
    			95, 100, '', 'PMOS', null, null, this.getTagsForStencil(gnmet, 'mosfet_ic_p', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'mosfet_n_no_bulk;',
    			95, 100, '', 'MOSFET No Bulk (N)', null, null, this.getTagsForStencil(gnmet, 'mosfet_n_no_bulk', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'mosfet_p_no_bulk;',
    			95, 100, '', 'MOSFET No Bulk (P)', null, null, this.getTagsForStencil(gnmet, 'mosfet_p_no_bulk', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'dual_gate_mosfet_n;',
    			95, 100, '', 'Dual Gate MOSFET (N)', null, null, this.getTagsForStencil(gnmet, 'dual_gate_mosfet_n', dtmet).join(' ')),
    	this.createVertexTemplateEntry(mef1 + 'dual_gate_mosfet_p;',
    			95, 100, '', 'Dual Gate MOSFET (P)', null, null, this.getTagsForStencil(gnmet, 'dual_gate_mosfet_p', dtmet).join(' ')),
    	this.createVertexTemplateEntry(met + 'nmos;pointerEvents=1;',
    			60, 100, '', 'NMOS', null, null, this.getTagsForStencil(gnmet, 'nmos', dtmet).join(' ')),
    	this.createVertexTemplateEntry(met + 'pmos;pointerEvents=1;',
    			60, 100, '', 'PMOS', null, null, this.getTagsForStencil(gnmet, 'pmos', dtmet).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Instruments');

    this.addPaletteFunctions('electrical\Instruments', 'Electrical / Instruments', false,
    [
    	this.createVertexTemplateEntry('verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=50;',
    			90, 90, 'A', 'Ammeter', null, null, this.getTagsForStencil(gnmein, 'ampermeter ammeter', dtmein).join(' ')),
    	this.createVertexTemplateEntry(mein + 'galvanometer;',
    			90, 90, '', 'Galvanometer', null, null, this.getTagsForStencil(gnmein, 'galvanometer', dtmein).join(' ')),
    	this.createVertexTemplateEntry(mein + 'oscilloscope;',
    			90, 90, '', 'Oscilloscope', null, null, this.getTagsForStencil(gnmein, 'oscilloscope', dtmein).join(' ')),
    	this.createVertexTemplateEntry(mein + 'signal_generator;',
    			90, 90, '', 'Signal Generator', null, null, this.getTagsForStencil(gnmein, 'signal_generator', dtmein).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=50;',
    			90, 90, 'V', 'Voltmeter', null, null, this.getTagsForStencil(gnmein, 'ampermeter ammeter', dtmein).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Misc');

    this.addPaletteFunctions('electrical\Misc', 'Electrical / Misc', false,
    [
    	this.createVertexTemplateEntry(mer + 'aerial_-_antenna_1;',
    			80, 100, '', 'Antenna', null, null, this.getTagsForStencil(gnmer, 'aerial_-_antenna_1', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mer + 'aerial_-_antenna_2;',
    			79, 100, '', 'Antenna', null, null, this.getTagsForStencil(gnmer, 'aerial_-_antenna_2', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mer + 'loop_antenna;',
    			64.8, 69.78, '', 'Loop Antenna', null, null, this.getTagsForStencil(gnmer, 'loop_antenna', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'loop_antenna',
    			100, 100, '', 'Loop Antenna', null, null, this.getTagsForStencil(gnmess, 'loop antenna', dtmem).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=35;',
    			60, 60, 'M', 'Electrical Motor', null, null, this.getTagsForStencil(gnmeem, 'motor_1', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(mxConstants.STYLE_SHAPE + '=mxgraph.electrical.electro-mechanical.motor_2;html=1;shadow=0;dashed=0;align=center;fontSize=30;strokeWidth=1;',
    			100, 60, '', 'Motor Armature', null, null, this.getTagsForStencil(gnmeem, 'motor_2', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'co-ax;',
    			40, 60, '', 'Co-Ax', null, null, this.getTagsForStencil(gnmem, 'co-ax', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'crystal_1;',
    			100, 40, '', 'Crystal', null, null, this.getTagsForStencil(gnmem, 'crystal_1', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'fuse_1;',
    			100, 20, '', 'Fuse (IEC)', null, null, this.getTagsForStencil(gnmem, 'fuse_1', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'fuse_2;',
    			100, 20, '', 'Fuse (IEEE)', null, null, this.getTagsForStencil(gnmem, 'fuse_2', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'fuse_3;',
    			100, 12, '', 'Fuse (obsolete)', null, null, this.getTagsForStencil(gnmem, 'fuse_3', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'fuse_4;',
    			100, 32, '', 'Fuse (IEEE)', null, null, this.getTagsForStencil(gnmem, 'fuse_4', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'light_bulb;',
    			60, 50, '', 'Light Bulb', null, null, this.getTagsForStencil(gnmem, 'light_bulb', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'illuminating_bulb;',
    			60, 50, '', 'Illuminating Bulb', null, null, this.getTagsForStencil(gnmem, 'illuminating_bulb', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'light_bulb;',
    			60, 50, '', 'Pilot Light', null, null, this.getTagsForStencil(gnmem, 'light_bulb', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'neon_lamp_2;',
    			60, 50, '', 'Neon Lamp', null, null, this.getTagsForStencil(gnmem, 'neon_lamp_2', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'flourescent_lamp',
    			80, 30, '', 'Flourescent Lamp', null, null, this.getTagsForStencil(gnmess, 'flourescent lamp', dtmem).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'lamp',
    			50, 100, '', 'Lamp', null, null, this.getTagsForStencil(gnmess, 'lamp', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(mem + 'thermocouple;',
    			80, 81, '', 'Thermocouple', null, null, this.getTagsForStencil(gnmem, 'thermocouple', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mea + 'amplifier;',
    			90, 100, '', 'Amplifier', null, null, this.getTagsForStencil(gnmea, 'amplifier', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'controlled_amplifier;',
    			100, 90, '', 'Controlled Amplifier', null, null, this.getTagsForStencil(gnmea, 'controlled_amplifier', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'dac;',
    			70, 46, '', 'DAC', null, null, this.getTagsForStencil(gnmea, 'dac', dtmea).join(' ')),
    	this.createVertexTemplateEntry(
    			'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.abstract.mux2;',
    			80, 120, 'Mux', 'Mux', null, null, this.getTagsForStencil(gnmea, 'mux', dtmea).join(' ')),
    	this.createVertexTemplateEntry(
    			'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.abstract.mux2;operation=demux;',
    			80, 120, 'Demux', 'Demux', null, null, this.getTagsForStencil(gnmea, 'mux', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'operational_amp_1;',
    			98, 90, '', 'Operational Amp', null, null, this.getTagsForStencil(gnmea, 'operational_amp_1', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'operational_amp_2;',
    			98, 90, '', 'Operational Amp', null, null, this.getTagsForStencil(gnmea, 'operational_amp_2', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'ota_1;',
    			100, 90, '', 'OTA', null, null, this.getTagsForStencil(gnmea, 'ota_1', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'ota_2;',
    			100, 90, '', 'OTA', null, null, this.getTagsForStencil(gnmea, 'ota_2', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'ota_3;',
    			100, 90, '', 'OTA', null, null, this.getTagsForStencil(gnmea, 'ota_3', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'quantizer;',
    			52, 46, '', 'Quantizer', null, null, this.getTagsForStencil(gnmea, 'quantizer', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'delta;',
    			50, 50, '', 'Delta', null, null, this.getTagsForStencil(gnmea, 'delta', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mxConstants.STYLE_SHAPE + '=mxgraph.electrical.abstract.function;html=1;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=24',
    			50, 50, 'fn', 'Function', null, null, this.getTagsForStencil(gnmea, 'function', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'integrator;',
    			50, 50, '', 'Integrator', null, null, this.getTagsForStencil(gnmea, 'integrator', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'multiplier;',
    			50, 50, '', 'Multiplier', null, null, this.getTagsForStencil(gnmea, 'multiplier', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'sum;',
    			50, 50, '', 'Sum', null, null, this.getTagsForStencil(gnmea, 'sum', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'summation_point;',
    			50, 50, '', 'Summation Point', null, null, this.getTagsForStencil(gnmea, 'summation_point', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'filter;',
    			52, 46, '', 'Filter', null, null, this.getTagsForStencil(gnmea, 'filter', dtmea).join(' ')),
    	this.createVertexTemplateEntry(s + '=mxgraph.electrical.logic_gates.bandpass_filter;',
    			52, 46, '', 'Bandpass Filter', null, null, this.getTagsForStencil('mxgraph.electrical.logic_gates', 'bandpass_filter', '').join(' ')),
    	this.createVertexTemplateEntry(s + '=mxgraph.electrical.logic_gates.highpass_filter;',
    			52, 46, '', 'Highpass Filter', null, null, this.getTagsForStencil('mxgraph.electrical.logic_gates', 'highpass_filter', '').join(' ')),
    	this.createVertexTemplateEntry(s + '=mxgraph.electrical.logic_gates.lowpass_filter;',
    			52, 46, '', 'Lowpass Filter', null, null, this.getTagsForStencil('mxgraph.electrical.logic_gates', 'lowpass_filter', '').join(' ')),
    	this.createVertexTemplateEntry(mxConstants.STYLE_SHAPE + '=mxgraph.electrical.abstract.thermistor_with_independent_integral_heater;html=1;shadow=0;dashed=0;strokeWidth=1;align=center;overflow=fill;fontSize=12;',
    			100, 94.25,
    			'<table cellpadding="0" cellspacing="0" style="width:100%;height:100%;">' +
    			'<tr height="45%">' +
    			'<td align="center">\\temp\\</td>' +
    			'</tr>' +
    			'<tr height="55%">' +
    			'<td></td>' +
    			'</tr>' +
    			'</table>',
    			'Thermistor With Independent Integral Heater', null, null, this.getTagsForStencil(gnmea, 'thermistor_with_independent_integral_heater', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mea + 'voltage_regulator;',
    			70, 58, '', 'Voltage Regulator', null, null, this.getTagsForStencil(gnmea, 'voltage_regulator', dtmea).join(' ')),
    	this.createVertexTemplateEntry(mess + 'vss2;fontSize=24;flipV=1;',
    			60, 40,
    			'V<sub>ss</sub>', 'Vss', null, null, this.getTagsForStencil(gnmess, 'vss', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=top;' + mxConstants.STYLE_VERTICAL_ALIGN + '=bottom;' + mxConstants.STYLE_SHAPE + '=mxgraph.electrical.signal_sources.vdd;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=24;html=1;flipV=1;',
    			60, 40,
    			'V<sub>dd</sub>', 'Vdd', null, null, this.getTagsForStencil(gnmess, 'vdd', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=top;' + mxConstants.STYLE_VERTICAL_ALIGN + '=bottom;' + mxConstants.STYLE_SHAPE + '=mxgraph.electrical.signal_sources.current_flow;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=10;html=1;',
    			70, 10,
    			'5 mA',	'Current Flow', null, null, this.getTagsForStencil(gnmess, 'current_flow', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mxConstants.STYLE_LABEL_POSITION + '=right;' + mxConstants.STYLE_ALIGN + '=left;' + mxConstants.STYLE_SHAPE + '=mxgraph.electrical.signal_sources.voltage;shadow=0;dashed=0;strokeWidth=1;fontSize=10;html=1;',
    			10, 70,
    			'1.2 V', 'Voltage', null, null, this.getTagsForStencil(gnmess, 'voltage', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'equipotential;',
    			90, 90, '', 'Equipotential', null, null, this.getTagsForStencil(gnmess, 'equipotential', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'protective_earth;',
    			25, 20, '', 'Equipotential', null, null, this.getTagsForStencil(gnmess, 'protective_earth', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mess + 'signal_ground;',
    			45, 30, '', 'Ground', null, null, this.getTagsForStencil(gnmess, 'signal_ground', dtmess).join(' ')),
    	this.createVertexTemplateEntry(mem + 'chassis;',
    			65, 32, '', 'Chassis', null, null, this.getTagsForStencil(gnmess, 'chassis', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'circuit_breaker;',
    			100, 13, '', 'Circuit Breaker', null, null, this.getTagsForStencil(gnmess, 'circuit breaker', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'generic_component',
    			60, 60, '', 'Generic Component', null, null, this.getTagsForStencil(gnmess, 'generic component', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'permanent_magnet',
    			20, 70, '', 'Permanent Magnet', null, null, this.getTagsForStencil(gnmess, 'permanent magnet', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'thermal_element',
    			100, 32, '', 'Thermal Element', null, null, this.getTagsForStencil(gnmess, 'thermal element', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'igniter_plug',
    			72, 39, '', 'Igniter Plug', null, null, this.getTagsForStencil(gnmess, 'igniter plug', dtmem).join(' ')),
    	this.createVertexTemplateEntry('shape=mxgraph.arrows2.arrow;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;dy=0;dx=10;notch=0;',
    			100, 30, '', 'Pickup Head', null, null, this.getTagsForStencil(gnmess, 'pickup head', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'squib_ignitor',
    			100, 100, '', 'Squib Ignitor', null, null, this.getTagsForStencil(gnmess, 'squib ignitor', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'transducer',
    			70, 60, '', 'Transducer', null, null, this.getTagsForStencil(gnmess, 'transducer', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'transducer_2',
    			80, 100, '', 'Transducer', null, null, this.getTagsForStencil(gnmess, 'transducer', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'thermopile',
    			80, 82, '', 'Thermopile', null, null, this.getTagsForStencil(gnmess, 'thermopile', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'indicator',
    			60, 60, '', 'Indicator', null, null, this.getTagsForStencil(gnmess, 'indicator', dtmem).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.surge_protector;',
    			70, 20, '', 'Surge Protector', null, null, this.getTagsForStencil(gnmess, 'surge protector', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'surge_protector_2;',
    			70, 24, '', 'Surge Protector', null, null, this.getTagsForStencil(gnmess, 'surge protector', dtmem).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=rect;',
    			130, 50, '', 'Material', null, null, this.getTagsForStencil(gnmess, 'material', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'sensing_link_squib',
    			130, 40, '', 'Sensing Link Squib', null, null, this.getTagsForStencil(gnmess, 'sensing link squib', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mem + 'delay_element',
    			100, 100, '', 'Delay Element', null, null, this.getTagsForStencil(gnmess, 'delay_element', dtmem).join(' ')),
    	this.createVertexTemplateEntry(mer + 'buzzer',
    			80, 50, '', 'Buzzer', null, null, this.getTagsForStencil(gnmess, 'buzzer', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'adapter',
    			100, 40, '', 'Adapter', null, null, this.getTagsForStencil(gnmess, 'adapter', dtmer).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=ellipse;perimeter=ellipsePerimeter;',
    			15, 15, '', 'Circuit Terminal', null, null, this.getTagsForStencil(gnmess, 'circuit terminal', dtmer).join(' ')),
    	this.createEdgeTemplateEntry('endArrow=open;html=1;strokeWidth=1;endFill=0;endSize=20;',
    			100, 0, '', 'M/F Contact', null, this.getTagsForStencil(gnmess, '', 'mf contact').join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.mf_contact_2',
    			100, 10, '', 'M/F Contact 2', null, null, this.getTagsForStencil(gnmess, 'mf contact', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'terminal_board',
    			75, 150, '', 'Terminal Board', null, null, this.getTagsForStencil(gnmess, 'terminal board', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'cable_termination',
    			100, 50, '', 'Cable Termination', null, null, this.getTagsForStencil(gnmess, 'cable termination', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + '2_conductor_jack',
    			100, 50, '', '2-Conductor Jack', null, null, this.getTagsForStencil(gnmess, '2 conductor jack two', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + '3_conductor_jack',
    			100, 50, '', '3-Conductor Jack', null, null, this.getTagsForStencil(gnmess, '3 conductor jack three', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + '2_conductor_plug',
    			53, 24, '', '2-Conductor Plug', null, null, this.getTagsForStencil(gnmess, '2 conductor plug two', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + '3_conductor_plug',
    			53, 24, '', '3 Conductor Plug', null, null, this.getTagsForStencil(gnmess, '3 conductor plug', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'normalled_jacks',
    			230, 65, '', 'Normalled Jacks', null, null, this.getTagsForStencil(gnmess, 'normalled jacks', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'normalled_jack',
    			110, 65, '', 'Normalled Jack', null, null, this.getTagsForStencil(gnmess, 'normalled jack', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'coaxial_outside_conductor',
    			300, 150, '', 'Coaxial Outside Conductor', null, null, this.getTagsForStencil(gnmess, 'coaxial outside conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'coaxial_center_conductor',
    			300, 150, '', 'Coaxial Center Conductor', null, null, this.getTagsForStencil(gnmess, 'coaxial center conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'large_d_connector',
    			375, 75, '', 'Large D Connector', null, null, this.getTagsForStencil(gnmess, 'large d connector', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'small_d_connector',
    			150, 75, '', 'Small D Connector', null, null, this.getTagsForStencil(gnmess, 'small d connector', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'c_header_connector',
    			200, 75, '', 'C Header Connector', null, null, this.getTagsForStencil(gnmess, 'c header connector', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'ac_out',
    			200, 100, '', 'AC Out', null, null, this.getTagsForStencil(gnmess, 'ac out alternate current', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'shielded_jack_plug',
    			50, 100, '', 'Shielded Jack/Plug', null, null, this.getTagsForStencil(gnmess, 'shielded jack plug', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'coaxial_jack_plug',
    			50, 100, '', 'Coaxial Jack/Plug', null, null, this.getTagsForStencil(gnmess, 'coaxial jack/plug', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_2_conductor_1',
    			100, 100, '', 'F/M 2 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_2_conductor_2',
    			100, 100, '', 'F/M 2 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_2_conductor_3',
    			100, 50, '', 'F/M 2 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_3_conductor_1',
    			100, 100, '', 'F/M 3 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_3_conductor_2',
    			100, 100, '', 'F/M 3 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_3_conductor_3',
    			100, 100, '', 'F/M 3 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_3_conductor_4',
    			100, 100, '', 'F/M 3 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'f_m_3_conductor_5',
    			100, 100, '', 'F/M 3 Conductor', null, null, this.getTagsForStencil(gnmess, 'fm 2 conductor', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mem + 'plug_socket_connection',
    			20, 20, '', 'Plug-Socket Connection', null, null, this.getTagsForStencil(gnmess, 'Plug Socket Connection', dtmer).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Audio');

    this.addPaletteFunctions('electrical\Audio', 'Electrical / Audio', false,
    [
    	this.createVertexTemplateEntry(mer + 'dipole;pointerEvents=1;',
    			100, 40, '', 'Dipole', null, null, this.getTagsForStencil(gnmer, 'dipole', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mer + 'electret_microphone;',
    			70, 70, '', 'Electret Microphone', null, null, this.getTagsForStencil(gnmer, 'electret_microphone', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mer + 'microphone_1;',
    			70, 70, '', 'Microphone', null, null, this.getTagsForStencil(gnmer, 'microphone_1', dtmer).join(' ')),
    	this.createVertexTemplateEntry(mer + 'microphone_2;',
    			42, 70, '', 'Microphone', null, null, this.getTagsForStencil(gnmer, 'microphone_2', dtmer).join(' ')),
    	this.createVertexTemplateEntry(meem + 'piezo_sounder;pointerEvents=1;',
    			100, 40, '', 'Piezo Sounder', null, null, this.getTagsForStencil(gnmeem, 'piezo_sounder', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'buzzer;',
    			45, 60, '', 'Buzzer', null, null, this.getTagsForStencil(gnmeem, 'buzzer', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(meem + 'loudspeaker;',
    			25, 50, '', 'Loudspeaker', null, null, this.getTagsForStencil(gnmeem, 'loudspeaker', dtmeem).join(' ')),
    	this.createVertexTemplateEntry(mer + 'headphones;pointerEvents=1;',
    			66, 56, '', 'Headphones', null, null, this.getTagsForStencil(gnmer, 'headphones', dtmer).join(' ')),
    	this.createVertexTemplateEntry(meem + 'bell;',
    			47, 60, '', 'Bell', null, null, this.getTagsForStencil(gnmeem, 'bell', dtmeem).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\PlcLadder');

    this.addPaletteFunctions('electrical\PlcLadder', 'Electrical / PLC Ladder', false,
    [
    	this.createVertexTemplateEntry(mep + 'contact;',
    			50, 25, '', 'Contact', null, null, this.getTagsForStencil(gnmep, 'contact', dtmep).join(' ')),
    	this.createVertexTemplateEntry(mep + 'not_contact;',
    			50, 25, '', 'Contact (N)', null, null, this.getTagsForStencil(gnmep, 'not_contact', dtmep).join(' ')),
    	this.createVertexTemplateEntry(mep + 'not_output_1;',
    			50, 25, '', 'Output (N)', null, null, this.getTagsForStencil(gnmep, 'not_output_1;', dtmep).join(' ')),
    	this.createVertexTemplateEntry(mep + 'not_output_2;',
    			50, 25, '', 'Output (N)', null, null, this.getTagsForStencil(gnmep, 'not_output_2', dtmep).join(' ')),
    	this.createVertexTemplateEntry(mep + 'output_1;',
    			50, 25, '', 'Output', null, null, this.getTagsForStencil(gnmep, 'output_1', dtmep).join(' ')),
    	this.createVertexTemplateEntry(mep + 'output_2;',
    			50, 25, '', 'Output', null, null, this.getTagsForStencil(gnmep, 'output_2', dtmep).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Optical');

    this.addPaletteFunctions('electrical\Optical', 'Electrical / Optical', false,
    [
    	this.createVertexTemplateEntry(meoe + '7_segment_display;pointerEvents=1;',
    			74.7, 96.1, '', '7 Segment Display', null, null, this.getTagsForStencil(gnmeoe, '7_segment_display', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + '7_segment_display_with_dp;pointerEvents=1;',
    			79.8, 96.9, '', '7 Segment Display with DP', null, null, this.getTagsForStencil(gnmeoe, '7_segment_display_with_dp', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + '9_segment_display;pointerEvents=1;',
    			74.7, 96.1, '', '9 Segment Display', null, null, this.getTagsForStencil(gnmeoe, '9_segment_display', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + '9_segment_display_with_dp;pointerEvents=1;',
    			79.8, 96.9, '', '9 Segment Display with DP', null, null, this.getTagsForStencil(gnmeoe, '9_segment_display_with_dp', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'led_1;pointerEvents=1;',
    			100, 65, '', 'LED', null, null, this.getTagsForStencil(gnmeoe, 'led_1', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'led_2;pointerEvents=1;',
    			100, 70, '', 'LED', null, null, this.getTagsForStencil(gnmeoe, 'led_2', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'light-activated_scr;pointerEvents=1;',
    			100, 70, '', 'Light Activated SCR', null, null, this.getTagsForStencil(gnmeoe, 'light-activated_scr', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'opto-coupler;',
    			99, 60, '', 'Opto-coupler', null, null, this.getTagsForStencil(gnmeoe, 'opto-coupler', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'opto-transistor;',
    			100, 110, '', 'Opto-transistor', null, null, this.getTagsForStencil(gnmeoe, 'opto-transistor', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'photodiode;pointerEvents=1;',
    			100, 70, '', 'Photodiode', null, null, this.getTagsForStencil(gnmeoe, 'photodiode', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'photo_resistor_1;',
    			100, 90, '', 'Photo Resistor', null, null, this.getTagsForStencil(gnmeoe, 'photo_resistor_1', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'photo_resistor_2;pointerEvents=1;',
    			100, 50, '', 'Photo Resistor', null, null, this.getTagsForStencil(gnmeoe, 'photo_resistor_2', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'photo_resistor_3;',
    			100, 90, '', 'Photo Resistor', null, null, this.getTagsForStencil(gnmeoe, 'photo_resistor_3', dtmeoe).join(' ')),
    	this.createVertexTemplateEntry(meoe + 'solar_cell;pointerEvents=1;',
    			100, 70, '', 'Solar Cell', null, null, this.getTagsForStencil(gnmeoe, 'solar_cell', dtmeoe).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\VacuumTubes');

    this.addPaletteFunctions('electrical\VacuumTubes', 'Electrical / Vacuum Tubes', false,
    [
    	this.createVertexTemplateEntry(metd + 'diode;',
    			70, 77, '', 'Diode', null, null, this.getTagsForStencil(gnmetd, 'diode', dtmetd).join(' ')),
    	this.createVertexTemplateEntry(metd + 'double_diode;',
    			70, 77, '', 'Double Diode', null, null, this.getTagsForStencil(gnmetd, 'double_diode', dtmetd).join(' ')),
    	this.createVertexTemplateEntry(metd + 'triode;',
    			70, 77, '', 'Triode', null, null, this.getTagsForStencil(gnmetd, 'triode', dtmetd).join(' ')),
    	this.createVertexTemplateEntry(metd + 'double_triode;',
    			70, 77, '', 'Double Triode', null, null, this.getTagsForStencil(gnmetd, 'double_triode', dtmetd).join(' ')),
    	this.createVertexTemplateEntry(metd + 'tetrode;',
    			70, 77, '', 'Tetrode', null, null, this.getTagsForStencil(gnmetd, 'tetrode', dtmetd).join(' ')),
    	this.createVertexTemplateEntry(metd + 'pentode;',
    			70, 77, '', 'Pentode', null, null, this.getTagsForStencil(gnmetd, 'pentode', dtmetd).join(' ')),
    	this.createVertexTemplateEntry(metd + 'photocell;',
    			70, 87, '', 'Photocell', null, null, this.getTagsForStencil(gnmetd, 'photocell', dtmetd).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Waveforms');

    this.addPaletteFunctions('electrical\Waveforms', 'Electrical / Waveforms', false,
    [
    	this.createVertexTemplateEntry(mew + 'pulse_1;',
    			90, 90, '', 'Pulse', null, null, this.getTagsForStencil(gnmew, 'pulse_1', dtmew).join(' ')),
    	this.createVertexTemplateEntry(mew + 'pulse_2;',
    			90, 90, '', 'Pulse', null, null, this.getTagsForStencil(gnmew, 'pulse_2', dtmew).join(' ')),
    	this.createVertexTemplateEntry(mew + 'sawtooth;',
    			90, 40, '', 'Sawtooth', null, null, this.getTagsForStencil(gnmew, 'sawtooth', dtmew).join(' ')),
    	this.createVertexTemplateEntry(mew + 'sine_wave;',
    			90, 66.18, '', 'Sine Wave', null, null, this.getTagsForStencil(gnmew, 'sine_wave', dtmew).join(' ')),
    	this.createVertexTemplateEntry(mew + 'slow_square_wave;',
    			90, 80, '', 'Chopped Square Wave', null, null, this.getTagsForStencil(gnmew, 'slow_square_wave', dtmew).join(' ')),
    	this.createVertexTemplateEntry(mew + 'square_wave;',
    			90, 80, '', 'square_wave', null, null, this.getTagsForStencil(gnmew, 'square_wave', dtmew).join(' ')),
    	this.createVertexTemplateEntry(mew + 'step_1;',
    			90, 90, '', 'Step', null, null, this.getTagsForStencil(gnmew, 'step_1', dtmew).join(' ')),
    	this.createVertexTemplateEntry(mew + 'step_2;',
    			90, 90, '', 'Step', null, null, this.getTagsForStencil(gnmew, 'step_2', dtmew).join(' '))
    ]);

    this.setCurrentSearchEntryLibrary('electrical', 'electrical\RotMech');

    this.addPaletteFunctions('electrical\RotMech', 'Electrical / Rotating Equipment & Mechanical Functions', false,
    [
    	this.createVertexTemplateEntry('verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;fontSize=32;perimeter=ellipsePerimeter;',
    			100, 100, 'M', 'Rotating Machine', null, null, this.getTagsForStencil(gnmerm, 'rotating machine', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'armature;pointerEvents=1;',
    			100, 100, '', 'Armature', null, null, this.getTagsForStencil(gnmerm, 'armature', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'field;pointerEvents=1;',
    			90, 15, '', 'Field', null, null, this.getTagsForStencil(gnmerm, 'field', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(mem + 'permanent_magnet;pointerEvents=1;',
    			20, 70, '', 'Permanent Magnet', null, null, this.getTagsForStencil(gnmerm, 'permanent magnet', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'winding_connection;',
    			100, 100, '', 'Winding Connection', null, null, this.getTagsForStencil(gnmerm, 'winding connection', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'synchro;',
    			80, 100, '', 'Synchro', null, null, this.getTagsForStencil(gnmerm, 'synchro', dtmerm).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=trapezoid;perimeter=none;',
    			75, 25, '', 'Brake', null, null, this.getTagsForStencil(gnmerm, 'brake', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'gearing;pointerEvents=1;',
    			100, 64, '', 'Gearing', null, null, this.getTagsForStencil(gnmerm, 'gearing', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.rot_mech.rotation;',
    			69, 54, '', 'Rotation', null, null, this.getTagsForStencil(gnmerm, 'rotation', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'clutch;pointerEvents=1;',
    			100, 20, '', 'Clutch', null, null, this.getTagsForStencil(gnmerm, 'clutch', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'clutch_2;pointerEvents=1;',
    			90, 60, '', 'Clutch', null, null, this.getTagsForStencil(gnmerm, 'clutch', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'delayed_action;pointerEvents=1;',
    			72, 50, '', 'Delayed Action', null, null, this.getTagsForStencil(gnmerm, 'delayed action', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'manual_control;pointerEvents=1;',
    			50, 50, '', 'Manual Control', null, null, this.getTagsForStencil(gnmerm, 'manual control', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'blocking_device;pointerEvents=1;',
    			100, 15, '', 'Blocking Device', null, null, this.getTagsForStencil(gnmerm, 'blocking device', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'latching_device;pointerEvents=1;',
    			100, 22, '', 'Latching Device', null, null, this.getTagsForStencil(gnmerm, 'latching device', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'mechanical_interlock;pointerEvents=1;',
    			100, 30, '', 'Mechanical Interlock', null, null, this.getTagsForStencil(gnmerm, 'mechanical interlock', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'automatic_return;pointerEvents=1;',
    			100, 12, '', 'Automatic Return', null, null, this.getTagsForStencil(gnmerm, 'automatic_return', dtmerm).join(' ')),
    	this.createVertexTemplateEntry(merm + 'detent;pointerEvents=1;',
    			100, 8, '', 'Detent', null, null, this.getTagsForStencil(gnmerm, 'detent', dtmerm).join(' '))
    ]);

    var sb = this;
    this.setCurrentSearchEntryLibrary('electrical', 'electrical\Transmission');

    var fns =
    [
    	this.createVertexTemplateEntry(metr + 'bus_width;pointerEvents=1;',
    			130, 156, '', 'Bus Width', null, null, this.getTagsForStencil(gnmetr, 'bus width', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'line_concentrator;',
    			130, 130, '', 'Line Concentrator', null, null, this.getTagsForStencil(gnmetr, 'line concentrator', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'cable_group;pointerEvents=1;',
    			130, 130, '', 'Cable Group', null, null, this.getTagsForStencil(gnmetr, 'cable group', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'overground_enclosure;',
    			130, 136, '', 'Overground Enclosure', null, null, this.getTagsForStencil(gnmetr, 'overground enclosure', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'optical_fiber;',
    			130, 80, '', 'Optical Fiber', null, null, this.getTagsForStencil(gnmetr, 'optical fiber', dtmetr).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=ellipse;',
    			10, 10, '', 'Terminal', null, null, this.getTagsForStencil(gnmetr, 'terminal', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'terminal_3_phase;pointerEvents=1;',
    			43, 10, '', 'Terminal 3 Phase', null, null, this.getTagsForStencil(gnmetr, 'Terminal 3 Phase', dtmetr).join(' ')),
    	this.createVertexTemplateEntry('verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;fontSize=50;fontStyle=1;perimeter=ellipsePerimeter;',
    			130, 130, 'T', 'Terminal', null, null, this.getTagsForStencil(gnmetr, 'terminal', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'line_cable;',
    			130, 60, '', 'Line/Cable', null, null, this.getTagsForStencil(gnmetr, 'line cable', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'anticreepage_device;pointerEvents=1;',
    			130, 88, '', 'Anticreepage Device', null, null, this.getTagsForStencil(gnmetr, 'anticreepage device', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'testPoint;',
    			60, 130, '', 'Test Point', null, null, this.getTagsForStencil(gnmetr, 'test point', dtmetr).join(' ')),
    	this.createEdgeTemplateEntry('endArrow=none;html=1;strokeWidth=1;',
    			100, 0, '', 'Transmission Path', null, this.getTagsForStencil(gnmess, '', 'transmission path').join(' ')),
    	this.createEdgeTemplateEntry('endArrow=classicThin;html=1;strokeWidth=1;endSize=20;',
    			100, 0, '', 'Direction of Flow', null, this.getTagsForStencil(gnmess, '', 'direction flow').join(' ')),
    	this.createVertexTemplateEntry(metr + 'straightBus;',
    			90, 130, '', 'Straight Bus', null, null, this.getTagsForStencil(gnmetr, 'straight bus', dtmetr).join(' ')),
    	this.createVertexTemplateEntry('html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendArrow;dy=15;dx=38;notch=0;arrowHead=55;rounded=0;strokeWidth=1',
    			130, 130, '', 'Elbow Bus', null, null, this.getTagsForStencil(gnmetr, 'elbow bus', dtmetr).join(' ')),
    	this.createVertexTemplateEntry('html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendArrow;dy=15;dx=38;notch=0;arrowHead=55;rounded=0;strokeWidth=1;flipH=1;',
    			130, 130, '', 'Elbow Bus', null, null, this.getTagsForStencil(gnmetr, 'elbow bus', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + '2_line_bus;',
    			130, 25, '', '2-Line Bus', null, null, this.getTagsForStencil(gnmetr, '2 two line bus', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + '3_line_bus;',
    			130, 30, '', '3-Line Bus', null, null, this.getTagsForStencil(gnmetr, '3 three line bus', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + '4_line_bus;',
    			130, 75, '', '4-Line Bus', null, null, this.getTagsForStencil(gnmetr, '3 three line bus', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + '8_line_bus;',
    			130, 180, '', '8-Line Bus', null, null, this.getTagsForStencil(gnmetr, '3 three line bus', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'twoLineBusElbow;notch=25;',
    			120, 120, '', '2-Line Bus Elbow', null, null, this.getTagsForStencil(gnmetr, '2 two line bus elbow', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'threeLineBusElbow;notch=30;',
    			120, 120, '', '3-Line Bus Elbow', null, null, this.getTagsForStencil(gnmetr, '3 two line bus elbow', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'fourLineBusElbow;notch=75;',
    			120, 120, '', '4-Line Bus Elbow', null, null, this.getTagsForStencil(gnmetr, '4 two line bus elbow', dtmetr).join(' ')),
    	this.createVertexTemplateEntry(metr + 'eightLineBusElbow;notch=180;',
    			200, 200, '', '8-Line Bus Elbow', null, null, this.getTagsForStencil(gnmetr, '8 two line bus elbow', dtmetr).join(' '))
    ];

    this.addPalette('electrical\Transmission', 'Electrical / Transmission Paths', false, mxUtils.bind(this, function(content)
    		{
    			for (var i = 0; i < fns.length; i++)
    			{
    				content.appendChild(fns[i](content));
    			}
    }));
    this.setCurrentSearchEntryLibrary();
  };

})();
